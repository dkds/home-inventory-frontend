import {
  getContainer,
  getContainerInfo,
  listByContainer,
  listTopContainers,
} from "@/services/container.service";
import { containerActions } from "@/store/container.slice";
import pLimit from "p-limit";
import { AppDispatch } from "@/store";
import { Container } from "@/types";

export const setSelectedContainer = (containerId: Number | null) => {
  return async (dispatch: AppDispatch) => {
    dispatch(loadContainers(containerId));
    dispatch(containerActions.setSelectedContainer(containerId));
    if (containerId === null) {
      dispatch(containerActions.setParentContainers([]));
    }
  };
};

export const loadContainers = (containerId: Number | null) => {
  return async (dispatch: AppDispatch) => {
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
            };
          })
      );
      const containers = await Promise.all(containersPromises);
      dispatch(containerActions.setContainers(containers));
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadContainerParentList = (containerId: Number | null) => {
  function getParentContainer(
    container: Container,
    containerList: Container[]
  ) {
    if (container.parentContainer) {
      containerList.push(container.parentContainer);
      return getParentContainer(container.parentContainer, containerList);
    }
    return containerList;
  }
  return async (dispatch: AppDispatch) => {
    try {
      const response = await getContainer(containerId);
      const container = response.data.data;
      const containerList = getParentContainer(container, [container]);
      containerList.reverse();
      dispatch(containerActions.setParentContainers(containerList));
    } catch (error) {
      console.log(error);
    }
  };
};
