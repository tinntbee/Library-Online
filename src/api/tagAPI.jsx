import axiosClient from "./axiosClient";
import { TagsByCategories } from "./fake-api";

const tagAPI = {
  getAllTagsByCategories: (params) => {
    return TagsByCategories;
  },
};

export default tagAPI;
