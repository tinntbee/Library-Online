import { delay } from "@redux-saga/core/effects";
import { sleep } from "../utils/apiUtil";
import axiosClient from "./axiosClient";
import { books, booksByTags, booksForYou, booksSlide } from "./fake-api";

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
    //handle API
    return booksForYou;
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
};

export default bookAPI;
