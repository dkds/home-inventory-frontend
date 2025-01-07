import { apiClient } from "./axios.service";

export const listContainers = () => {
  return apiClient.get("/containers");
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
