import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice";

import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        mode: modeSlice,
        product: productSlice,
        cart: cartSlice,
        user: userSlice,
    },
});