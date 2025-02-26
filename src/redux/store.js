
import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./loginSlice";

export let store = configureStore({
  reducer: {
    LoginSlice,
  },
});
