import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

const initialState = {
    products: {},
    loading: false
};
export const getProductsFB = createAsyncThunk('products/getProductsFB',
    async () => {
        const data = await getDocs(collection(db, "Categorys"));
        return data.docs.map((doc) => ({ ...doc.data() }));

    }
);
const productSlice = createSlice({
    name: "products",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getProductsFB.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProductsFB.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getProductsFB.rejected, (state, action) => {
            state.loading = false;
        });
    }
});


export default productSlice.reducer;