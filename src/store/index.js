import { configureStore } from "@reduxjs/toolkit";
import { containerReducer } from "@/store/container.slice";

export const store = configureStore({
  reducer: {
    container: containerReducer,
  },
});
