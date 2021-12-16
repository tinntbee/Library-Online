import { delay } from "@redux-saga/core/effects";
import { sleep } from "../utils/apiUtil";
import axiosClient from "./axiosClient";
import { books, booksByTags, booksForYou, booksSlide } from "./fake-api";

const commentAPI = {
  getAllByBookId: (bookId) => {
    const url = "/comments/getCommentsByBookId/" + bookId;
    return axiosClient.get(url);
  },
  post: ({ content, user, book, type }) => {
    const url = "/comments";
    return axiosClient.post(url, { content, user, book, type });
  },
  get: (_id) => {
    const url = "/comments/" + _id;
    return axiosClient.get(url);
  },
  delete: (_id) => {
    const url = "/comments/" + _id;
    return axiosClient.delete(url);
  },
  likeReact: (_id) => {
    const url = "/comments/reacts/" + _id;
    return axiosClient.post(url, { react: 1 });
  },
  removeReact: (_id) => {
    const url = "/comments/reacts/" + _id;
    return axiosClient.post(url, { react: 0 });
  },
  dislikeReact: (_id) => {
    const url = "/comments/reacts/" + _id;
    return axiosClient.post(url, { react: -1 });
  },
};

export default commentAPI;
