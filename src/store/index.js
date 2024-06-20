import { configureStore } from "@reduxjs/toolkit";

import homeItemsSlice from "./homeItemsSlice";
import cartItemsSlice from "./cartItemsSlice";

const ecommerceStore = configureStore({
    reducer: {
        items: homeItemsSlice.reducer,
        cart: cartItemsSlice.reducer,
    },
});

export default ecommerceStore;
