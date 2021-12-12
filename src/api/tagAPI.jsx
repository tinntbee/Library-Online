import axiosClient from "./axiosClient";
import { TagsByCategories } from "./fake-api";

const tagAPI = {
  getAllTagsByCategories: (params) => {
    const url = "/categories";
    return axiosClient.get(url);
  },
};

export default tagAPI;
