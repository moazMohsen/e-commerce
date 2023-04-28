import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    signInWithPopup
} from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../firebase.config";
import { validationForm } from "../components/nav/registrationForm/validationForm";


const initialState = {
    user: {
        userName: "",
        email: "",
        photo: "",
    },
    errMsg: {},
    loading: false,

};

export const loginForm = createAsyncThunk(
    "user/loginForm",
    async (formData, { rejectWithValue }) => {
        let formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;

        });

        const errMsg = validationForm(formData);
        if (errMsg.emailErrMsg || errMsg.passwordErrMsg) {
            return rejectWithValue(errMsg);
        }

        else {
            try {
                const methods = await fetchSignInMethodsForEmail(auth, formDataObj.email);
                if (methods.length === 0) {
                    return rejectWithValue({ emailNotFound: "The email address is not found. Please sign up first." });
                } else {
                    const data = await signInWithEmailAndPassword(
                        auth,
                        formDataObj.email,
                        formDataObj.password
                    );
                    const { displayName, email, photoURL } = data.user;
                    return {
                        userName: displayName,
                        email: email,
                        photo: photoURL,
                    };
                }
            } catch (error) {
                if (error.code === 'auth/wrong-password') {
                    return rejectWithValue({ wrongPassword: "invalid password." });
                } else if (error.code === 'auth/invalid-email') {
                    return rejectWithValue({ invalidEmail: 'invalid email.' });
                } else if (error.code === 'auth/user-not-found') {
                    return rejectWithValue({ userNotFound: 'user-not-found' });
                }
                return rejectWithValue(error.code);
            }
        }
    }
);

export const signUpForm = createAsyncThunk(
    "user/signUpForm",
    async (formData, { rejectWithValue }) => {

        let formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        const errMsg = validationForm(formData);
        if (Object.values(errMsg).some((value) => value)) {
            return rejectWithValue(errMsg);
        } else {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, formDataObj.email, formDataObj.password);
                const updateCredential = await updateProfile(userCredential.user, { displayName: formDataObj.name });
                const currentUser = auth.currentUser;

                const { displayName, email, photoURL } = currentUser;
                return {
                    userName: displayName,
                    email: email,
                    photo: photoURL,
                };
            } catch (error) {
                console.log(error);
            }
        }
    }
);

export const setUserLogin = createAsyncThunk(
    "user/setUserLogin", async () => {
        try {
            const result = await new Promise((resolve) => {
                onAuthStateChanged(auth, resolve);
            });

            if (result) {

                const { displayName, email, photoURL } = result;
                return {
                    userName: displayName,
                    email: email,
                    photo: photoURL,
                };
            }
            return null;
        }
        catch (error) {
            console.log(error);
        }
    }
);

export const loginGoogle = createAsyncThunk("user/loginGoogle", async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const { displayName, email, photoURL } = result.user;

        return {
            userName: displayName,
            email: email,///to get user email you shoul ask user for confirm email
            photo: photoURL,
        };
    } catch (error) {
        console.log(error);
    }
});
export const loginFacebook = createAsyncThunk('user/loginFacebook', async () => {
    try {
        const result = await signInWithPopup(auth, facebookProvider);

        const { displayName, email, photoURL } = result.user;

        return {
            userName: displayName,
            email: email,///to get user email you shoul ask user for confirm email
            photo: photoURL,
        };
    } catch (error) {
        console.log(error);
    }

});
export const logOut = createAsyncThunk(
    "user/signut", async () => {
        try {
            signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearPasswordErrMsg: (state) => {
            state.errMsg.passwordErrMsg = '';
        },
        clearEmaillErrMsg: (state) => {
            state.errMsg.emailErrMsg = '';
        },
        clearUserErrMsg: (state) => {
            state.errMsg.userErrMsg = '';
        },
        clearonfirmPasswordMsg: (state) => {
            state.errMsg.confirmPassword = '';
        }

    },
    extraReducers: (builder) => {
        // 
        builder.addCase(loginForm.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginForm.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(loginForm.rejected, (state, action) => {
            state.loading = false;
            state.errMsg = action.payload;
        });
        // 
        builder.addCase(signUpForm.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(signUpForm.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(signUpForm.rejected, (state, action) => {
            state.loading = false;
            state.errMsg = action.payload;
        });
        // 
        builder.addCase(setUserLogin.fulfilled, (state, action) => {
            if (action.payload !== null) {
                state.user = action.payload;
            }
        });
        // 
        builder.addCase(logOut.fulfilled, (state) => {
            state.user.userName = '';
            state.user.email = '';
            state.user.photo = '';
        });
        // 
        builder.addCase(loginGoogle.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginGoogle.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(loginGoogle.rejected, (state) => {
            state.loading = false;
        });
        // 
        builder.addCase(loginFacebook.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginFacebook.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.user = action.payload;

            }
        });
        builder.addCase(loginFacebook.rejected, (state,) => {
            state.loading = false;
        });
    }
});

export const { clearPasswordErrMsg, clearEmaillErrMsg, clearUserErrMsg,
    clearonfirmPasswordMsg } = userSlice.actions;
export default userSlice.reducer;