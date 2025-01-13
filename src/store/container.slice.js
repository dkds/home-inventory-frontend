import { createSlice } from "@reduxjs/toolkit";

const containerSlice = createSlice({
  name: "container",
  initialState: {
    containers: [],
    selectedContainer: null,
    parentContainers: [],
  },
  reducers: {
    setSelectedContainer: (state, action) => {
      state.selectedContainer = action.payload;
    },
    setContainers: (state, action) => {
      state.containers = action.payload;
    },
    setParentContainers: (state, action) => {
      state.parentContainers = action.payload;
    },
  },
});

export const containerActions = containerSlice.actions;
export const containerReducer = containerSlice.reducer;
