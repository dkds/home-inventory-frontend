import { Container } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { loadContainerParentList } from "./container.actions";

export interface ContainerState {
  loading: boolean;
  error: Error | null;
  selectedContainerId: number | null;
  containerList: Container[];
  parentContainers: Container[];
}

const initialState: ContainerState = {
  loading: false,
  error: null,
  containerList: [],
  selectedContainerId: null,
  parentContainers: [],
};

const containerSlice = createSlice({
  name: "container",
  initialState,
  reducers: {
    setSelectedContainer: (state, action) => {
      state.selectedContainerId = action.payload;
    },
    setContainers: (state, action) => {
      state.containerList = action.payload;
    },
    setParentContainers: (state, action) => {
      state.parentContainers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadContainerParentList.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadContainerParentList.fulfilled, (state, action) => {
        state.loading = false;
        state.containerList = action.payload;
      })
      .addCase(loadContainerParentList.rejected, (state, action) => {
        state.loading = false;
        state.error = new Error(action.error.message);
      });
  },
});

export const containerActions = containerSlice.actions;
export const containerReducer = containerSlice.reducer;
