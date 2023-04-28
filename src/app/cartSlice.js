import {
    createSlice, createAsyncThunk
} from "@reduxjs/toolkit";
//
import { collection, addDoc, updateDoc, where, query, getDocs, deleteDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase.config";

const initialState = {
    cart: [],
    loading: false,
    erorr: ''

};

export const addCartToFire = createAsyncThunk(
    'cart/addCartToFire',
    async ({ product, quantity = 1 }) => {
        console.log(product);
        console.log(quantity);
        const userId = auth.currentUser.uid;
        const cartRef = collection(db, `users/${userId}/cart`);
        const q = query(cartRef, where("id", "==", product.id));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            addDoc(cartRef, { ...product, quantity: quantity });
        } else {
            querySnapshot.forEach(doc => {
                updateDoc(doc.ref, {
                    quantity: doc.data().quantity + quantity
                });
            });
        }

        return product;
    }
);

export const getCartFromFire = createAsyncThunk(
    'cart/getCartFromFire',
    async (_, { getState }) => {
        const state = getState();
        const user = state.user.user;

        if (!user.userName) {
            return [];
        }
        const userId = auth.currentUser.uid;
        const cartRef = collection(db, `users/${userId}/cart`);
        const snapShot = await getDocs(cartRef);
        const cart = snapShot.docs.map(doc => doc.data());

        return cart;
    }
);

export const deletCartFromFire = createAsyncThunk(
    "cart/deleteCartFromFire",
    async (id) => {
        const userId = auth.currentUser.uid;
        const cartRef = collection(db, `users/${userId}/cart`);
        const q = query(cartRef, where("id", "==", id));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(doc => deleteDoc(doc.ref));

    }
);

export const deleteProductAndUpdateCart = (id) => async (dispatch) => {
    await dispatch(deletCartFromFire(id));
    dispatch(getCartFromFire());
};

export const deleteAllCart = createAsyncThunk(
    'cart/deleteAllCart',
    async () => {
        const userId = auth.currentUser.uid;
        const cartRef = collection(db, `users/${userId}/cart`);
        const snapShot = await getDocs(cartRef);
        snapShot.forEach(doc => deleteDoc(doc.ref));
    }
);
export const updateQuantity = createAsyncThunk('cart/updateQuantity',
    async ({ operation, cart }) => {
        const userId = auth.currentUser.uid;
        const cartRef = collection(db, `users/${userId}/cart`);
        const q = query(cartRef, where("id", "==", cart.id));
        const querySnapShot = await getDocs(q);
        let ubdatedCart;

        querySnapShot.forEach(async doc => {
            if (doc.data().quantity <= 1 && operation === "decrement") {
                return false;
            }
            ubdatedCart = {
                ...doc.data(), quantity: doc.data().quantity + (operation === "increment" ? 1 : -1)
            };
            await updateDoc(doc.ref, ubdatedCart);

        });
        return ubdatedCart;
    }
);
export const deleteAllCartAndUpdateCart = () => async (dispatch) => {
    await dispatch(deleteAllCart());
    dispatch(getCartFromFire());
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        // 
        builder.addCase(addCartToFire.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addCartToFire.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if (index === -1) {
                state.cart.push({ ...action.payload, quantity: 1 });
            } else {
                state.cart[index].quantity++;
            }
        });
        builder.addCase(addCartToFire.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        });
        // 
        builder.addCase(getCartFromFire.fulfilled, (state, action) => {

            state.cart = action.payload;
        });
        // 
        builder.addCase(updateQuantity.fulfilled, (state, action) => {
            if (action.payload) {

                const index = state.cart.findIndex(item => item.id === action.payload.id);
                state.cart[index].quantity = action.payload.quantity;
            }
        });
        // 
        builder.addCase(deleteAllCart.fulfilled, (state, action) => {
            state.cart = [];
        });



    }
});



export default cartSlice.reducer;