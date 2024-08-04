import { configureStore } from "@reduxjs/toolkit";
import passwordSlice from "./passwordSlice";

const store = configureStore({
  reducer: passwordSlice,
});

export default store;
