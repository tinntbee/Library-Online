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
  signInWithGoogle: (param) => {
    const url = `/accounts/login-google`;
    return axiosClient({
      method: "POST",
      url: url,
      data: param,
    });
  },
  reSign: (param) => {
    const url = "/accounts/resign";
    return axiosClient({
      method: "GET",
      url: url,
    });
  },
  getAccountInfo: () => {
    const url = "/accounts";
    return axiosClient.get(url);
  },
  getUserInfoForForum: (bookId) => {
    const url = "/accounts/getUserInfoForForum/" + bookId;
    return axiosClient.get(url);
  },
  getBookcase: () => {
    const url = "/bookcases";
    return axiosClient.get(url);
  },
  putChangeCover: (cover) => {
    const url = "/accounts/changeCover";
    return axiosClient.put(url, { cover: cover });
  },
  bookRefund: () => {
    const url = "/bookcases/refund";
    return axiosClient.get(url);
  },
  getReportAllTime: () => {
    const url = "pomodoro/getReportAllTime";
    return axiosClient.get(url);
  },
  postReportByTime: ({ begin, end }) => {
    const url = "pomodoro/postReportByTime";
    return axiosClient.post(url, { begin, end });
  },
};

export default userAPI;
