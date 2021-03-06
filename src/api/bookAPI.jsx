import { sleep } from "../utils/apiUtil";
import axiosClient from "./axiosClient";
import { books, booksForYou } from "./fake-api";

const bookAPI = {
  getAll: (params) => {
    const url = "/books";
    return axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `/books/detail/${id}`;
    return axiosClient.get(url);
  },
  getBooksSlide: () => {
    //handle API
    const url = "/books/slide";
    return axiosClient.get(url);
  },
  getBooksForYou: () => {
    const url = `/books/recommend`;
    return axiosClient.get(url);
  },
  getBooksByTags: (id) => {
    const url = `/books/bookByTag/${id}`;
    return axiosClient.get(url);
  },
  getBook: (params) => {
    const delayDemo = async () => {
      await sleep(2000);
      return books.find((item) => item._id === parseInt(params._id));
    };
    return delayDemo();
  },
  likeReact: (_id) => {
    const url = "/books/reacts/" + _id;
    return axiosClient.post(url, { react: 1 });
  },
  removeReact: (_id) => {
    const url = "/books/reacts/" + _id;
    return axiosClient.post(url, { react: 0 });
  },
  dislikeReact: (_id) => {
    const url = "/books/reacts/" + _id;
    return axiosClient.post(url, { react: -1 });
  },
  getBooksInBookcase: () => {
    const url = "/bookcases/books";
    return axiosClient.get(url);
  },
  buyBook: (bookId) => {
    const url = "/bookcases/buyBook";
    return axiosClient.post(url, { bookId: bookId });
  },
  buyBookAndReadNow: (bookId) => {
    const url = "/bookcases/buyBookAndReadNow";
    return axiosClient.post(url, { ookId: bookId });
  },
  getBookInBookcase: (_id) => {
    const url = "/bookcases/getBookInBookcase/" + _id;
    return axiosClient.get(url);
  },
  removeBookInBookcase: (_id) => {
    const url = "/bookcases/deleteBookInBookcase/" + _id;
    return axiosClient.delete(url);
  },
};

export default bookAPI;
