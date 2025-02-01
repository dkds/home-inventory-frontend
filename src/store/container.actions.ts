import {
  getContainer,
  getContainerInfo,
  listByContainer,
  listTopContainers,
} from "@/services/container.service";
import { containerActions } from "@/store/container.slice";
import { Container } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import pLimit from "p-limit";

export const SET_SELECTED_CONTAINER = "containers/setSelectedContainer";
export const LOAD_CONTAINER_LIST = "containers/loadContainerList";
export const LOAD_CONTAINER_PARENT_LIST = "containers/loadContainerParentList";

export const setSelectedContainer = createAsyncThunk(
  SET_SELECTED_CONTAINER,
  (containerId: number | null, thunkAPI) => {
    thunkAPI.dispatch(loadContainerList(containerId));
    if (containerId === null) {
      thunkAPI.dispatch(containerActions.setParentContainers([]));
    }
    return containerId;
  }
);

export const loadContainerList = createAsyncThunk(
  LOAD_CONTAINER_LIST,
  async (containerId: number | null, thunkAPI) => {
    const limit = pLimit(3);
    try {
      let response;
      if (containerId) {
        response = await listByContainer(containerId);
      } else {
        response = await listTopContainers();
      }
      const containersPromises = response.data.data.map(
        (container: Container) =>
          limit(async () => {
            const containerInfoResponse = await getContainerInfo(container.id);
            return {
              ...container,
              ...containerInfoResponse.data.data,
            } as Container;
          })
      );
      return Promise.all(containersPromises);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

function getParentContainer(container: Container, containerList: Container[]) {
  if (container.parentContainer) {
    containerList.push(container.parentContainer);
    return getParentContainer(container.parentContainer, containerList);
  }
  return containerList;
}

export const loadContainerParentList = createAsyncThunk(
  LOAD_CONTAINER_PARENT_LIST,
  async (containerId: Number | null, thunkAPI) => {
    try {
      const response = await getContainer(containerId);
      const container = response.data.data;
      const containerList = getParentContainer(container, [container]);
      containerList.reverse();
      return containerList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
