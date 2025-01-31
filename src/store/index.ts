import { configureStore } from "@reduxjs/toolkit";
import { containerReducer } from "@/store/container.slice";

export const store = configureStore({
  reducer: {
    container: containerReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
