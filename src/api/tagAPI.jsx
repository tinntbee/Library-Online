import axiosClient from "./axiosClient";
import { TagsByCategories } from "./fake-api";

const tagAPI = {
  getAllTagsByCategories: (params) => {
    const url = "/categories";
    return axiosClient.get(url);
  },
  getAll: () => {
    const url = "/tags";
    return axiosClient.get(url);
  },
  getOtherTag: () => {
    const url = "/tags/others";
    return axiosClient.get(url);
  },
};

export default tagAPI;
