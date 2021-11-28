import axiosClient from "./axiosClient";
import { imageAvatarList } from "./fake-api";

const imageAPI = {
  getAvatarDefaults: (params) => {
    //const url = "/images";
    return imageAvatarList;
  },
};

export default imageAPI;
