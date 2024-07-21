import { configureStore } from "@reduxjs/toolkit";
import slice from "./control";

const store = configureStore({
  reducer: slice,
});

export default store;
