import pLimit from "p-limit";
import {
  getContainerInfo,
  listTopContainers,
} from "../services/container.service";
import { containerActions } from "./container.slice";

export const loadContainers = () => {
  return async (dispatch) => {
    const limit = pLimit(3);
    try {
      const response = await listTopContainers();
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
