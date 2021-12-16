import * as type from "../types";

const bookActions = {
  getAll: (payload) => {
    return {
      type: type.GET_ALL_BOOKS,
      payload: payload,
    };
  },

  getBooksSlide: (payload) => {
    return {
      type: type.GET_BOOKS_SLIDE,
      payload: payload,
    };
  },

  getBooksForYou: (payload) => {
    return {
      type: type.GET_BOOKS_FOR_YOU,
      payload: payload,
    };
  },

  getBooksByTags: (id) => {
    return {
      type: type.GET_BOOKS_BY_TAGS,
      payload: id,
    };
  },

  getBookDetail: (_id) => {
    return {
      type: type.GET_BOOK_DETAIL,
      payload: _id,
    };
  },
};

export default bookActions;
