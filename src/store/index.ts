import { configureStore } from "@reduxjs/toolkit";
import { containerReducer } from "@/store/container.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    container: containerReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;

export const useAppDispatch = () => useDispatch<AppDispatch>();