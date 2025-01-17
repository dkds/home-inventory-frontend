import pLimit from "p-limit";
import {
  getContainer,
  getContainerInfo,
  listByContainer,
  listTopContainers,
} from "@/services/container.service";
import { containerActions } from "@/store/container.slice";

export const setSelectedContainer = (containerId) => {
  return async (dispatch) => {
    dispatch(loadContainers(containerId));
    dispatch(containerActions.setSelectedContainer(containerId));
    if (containerId === null) {
      dispatch(containerActions.setParentContainers([]));
    }
  };
};

export const loadContainers = (containerId) => {
  return async (dispatch) => {
    const limit = pLimit(3);
    try {
      let response;
      if (containerId) {
        response = await listByContainer(containerId);
      } else {
        response = await listTopContainers();
      }
      const containersPromises = response.data.data.map((container) =>
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

export const loadContainerParentList = (containerId) => {
  function getParentContainer(container, containerList) {
    if (container.parentContainer) {
      containerList.push(container.parentContainer);
      return getParentContainer(container.parentContainer, containerList);
    }
    return containerList;
  }
  return async (dispatch) => {
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
