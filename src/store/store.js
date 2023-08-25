import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import { CategoryReducer } from "./categorySlice";
import { productsReducer } from "./productSlice";
import { cartReducer } from "./cartSlice";
import { searchReducer } from "./searchSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    category: CategoryReducer,
    product: productsReducer,
    cart : cartReducer,
    search : searchReducer,
  },
});

export default store;
