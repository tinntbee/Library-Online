import axiosClient from "./axiosClient";

const replyAPI = {
  getAllByCommentId: (commentId) => {
    const url = "/replies/getRepliesByCommentId/" + commentId;
    return axiosClient.get(url);
  },
  post: ({ content, commentId }) => {
    const url = "/replies";
    return axiosClient.post(url, { content, commentId });
  },
  get: (_id) => {
    const url = "/replies/" + _id;
    return axiosClient.get(url);
  },
  delete: (_id) => {
    const url = "/replies/" + _id;
    return axiosClient.delete(url);
  },
  likeReact: (_id) => {
    const url = "/replies/reacts/" + _id;
    return axiosClient.post(url, { react: 1 });
  },
  removeReact: (_id) => {
    const url = "/replies/reacts/" + _id;
    return axiosClient.post(url, { react: 0 });
  },
  dislikeReact: (_id) => {
    const url = "/replies/reacts/" + _id;
    return axiosClient.post(url, { react: -1 });
  },
};

export default replyAPI;
