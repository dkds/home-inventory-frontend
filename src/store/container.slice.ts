import { Container } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import {
  loadContainerList,
  loadContainerParentList,
  setSelectedContainer,
} from "./container.actions";

export interface ContainerState {
  loading: boolean;
  error: Error | null;
  selectedContainerId: number | null;
  containerList: Container[];
  parentContainerList: Container[];
}

const initialState: ContainerState = {
  loading: false,
  error: null,
  selectedContainerId: null,
  containerList: [],
  parentContainerList: [],
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
      state.parentContainerList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadContainerList.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadContainerList.fulfilled, (state, action) => {
        console.log(state, action);
        
        state.loading = false;
        state.containerList = action.payload;
      })
      .addCase(loadContainerList.rejected, (state, action) => {
        state.loading = false;
        state.error = new Error(action.error.message);
      })
      .addCase(loadContainerParentList.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadContainerParentList.fulfilled, (state, action) => {
        state.loading = false;
        state.parentContainerList = action.payload;
      })
      .addCase(loadContainerParentList.rejected, (state, action) => {
        state.loading = false;
        state.error = new Error(action.error.message);
      })
      .addCase(setSelectedContainer.pending, (state) => {
        state.loading = true;
      })
      .addCase(setSelectedContainer.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedContainerId = action.payload;
      })
      .addCase(setSelectedContainer.rejected, (state, action) => {
        state.loading = false;
        state.error = new Error(action.error.message);
      });
  },
});

export const containerActions = containerSlice.actions;
export const containerReducer = containerSlice.reducer;
