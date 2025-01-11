import axios from "axios";
import { API_BASE } from "../config";

export const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 1000,
});
// Request Interceptor for Path Params
apiClient.interceptors.request.use(
  (config) => {
    const { pathParams } = config;

    if (pathParams) {
      // Replace placeholders in the URL with values from pathParams
      config.url = config.url.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
        if (pathParams[key] !== undefined) {
          return encodeURIComponent(pathParams[key]);
        }
        console.warn(`Path param '${key}' not found in pathParams`);
        return `:${key}`;
      });

      // Remove pathParams from config to avoid issues with Axios
      delete config.pathParams;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
