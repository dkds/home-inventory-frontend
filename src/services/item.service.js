import { apiClient } from "./axios.service";

export const listItems = () => {
  return apiClient.get("/items");
};

export const getItem = (itemId) => {
  return apiClient.get("/items/:itemId", {
    pathParams: { itemId },
  });
};

export const listByContainer = (containerId) => {
  return apiClient.get("items/:containerId", {
    params: { containerId },
  });
};
