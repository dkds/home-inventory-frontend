import { apiClient } from "./axios.service";

export const listContainers = () => {
  return apiClient.get("/containers");
};

export const getContainer = (containerId) => {
  return apiClient.get("/containers/:containerId", {
    pathParams: { containerId },
  });
};

export const getContainerInfo = (containerId) => {
  return apiClient.get("/containers/:containerId/info", {
    pathParams: { containerId },
  });
};

export const listTopContainers = () => {
  return apiClient.get("/containers", {
    params: { top_level: true },
  });
};

export const listByContainer = (containerId) => {
  return apiClient.get("/containers", {
    params: { container: containerId },
  });
};
