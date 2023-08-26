import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./slice/viewSlice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
  },
});
