import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counterSlice/index";
import cartSlice from "../cartSlice/index";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
  },
});
