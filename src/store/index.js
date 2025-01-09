import { configureStore } from "@reduxjs/toolkit";
import { containerReducer } from "./container.slice";

export const store = configureStore({
  reducer: {
    container: containerReducer,
  },
});
