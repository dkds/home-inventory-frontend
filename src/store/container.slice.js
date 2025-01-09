import { createSlice } from "@reduxjs/toolkit";

const containerSlice = createSlice({
  name: "container",
  initialState: { containers: [],  },
  reducers: {},
});

export const containerActions = containerSlice.actions;
export const containerReducer = containerSlice.reducer;
