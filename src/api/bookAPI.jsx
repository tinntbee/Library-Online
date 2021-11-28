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
    const url = `/books/${id}`;
    return axiosClient.get(url);
  },
  getBooksSlide: () => {
    //handle API
    return booksSlide;
  },
  getBooksForYou: () => {
    //handle API
    return booksForYou;
  },
  getBooksByTags: (id) => {
    return booksByTags.find((item) => item._id === id);
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
