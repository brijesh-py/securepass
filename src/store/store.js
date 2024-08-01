import { configureStore } from "@reduxjs/toolkit";
import slice from "./passwordSlice";

const store = configureStore({
  reducer: slice,
});

export default store;
