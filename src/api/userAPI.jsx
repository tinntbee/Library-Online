import axiosClient from "./axiosClient";

const userAPI = {
  getAllUser: (params) => {
    const url = "/user";
    return axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
};

export default userAPI;
