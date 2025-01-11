import { createSlice } from "@reduxjs/toolkit";

const containerSlice = createSlice({
  name: "container",
  initialState: { containers: [] },
  reducers: {
    setContainers: (state, action) => {
      state.containers = action.payload;
    },
  },
});

export const containerActions = containerSlice.actions;
export const containerReducer = containerSlice.reducer;
