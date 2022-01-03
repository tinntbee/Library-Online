import * as type from "../types";

const initialState = {
  booksSlide: {
    data: [],
    loading: false,
    error: "",
  },

  booksForYou: {
    data: [],
    loading: false,
    error: "",
  },

  tags: {
    data: [],
    loading: false,
    error: "",
  },

  booksByTags: {
    data: [],
    loading: false,
    error: "",
  },

  tagsByCategories: {
    data: [],
    loading: false,
    error: "",
  },
};

export default function bookStore(state = initialState, action) {
  let temp;
  switch (action.type) {
    case type.GET_BOOKS_SLIDE:
      return { ...state, booksSlide: { ...state.booksSlide, loading: true } };

    case type.GET_BOOKS_SLIDE_SUCCESS:
      // console.log(action.data);
      return {
        ...state,
        booksSlide: {
          ...state.booksSlide,
          loading: false,
          data: action.data,
        },
      };

    case type.GET_BOOKS_SLIDE_FAILED:
      return {
        ...state,
        booksSlide: {
          ...state.booksSlide,
          loading: false,
          error: action.message,
        },
      };

    case type.GET_BOOKS_FOR_YOU:
      return { ...state, booksForYou: { ...state.booksForYou, loading: true } };

    case type.GET_BOOKS_FOR_YOU_SUCCESS:
      return {
        ...state,
        booksForYou: {
          ...state.booksForYou,
          loading: false,
          data: action.data,
        },
      };

    case type.GET_BOOKS_FOR_YOU_FAILED:
      return {
        ...state,
        booksForYou: {
          ...state.booksForYou,
          loading: false,
          error: action.message,
        },
      };

    case type.GET_BOOKS_BY_TAGS:
      return { ...state, booksByTags: { ...state.booksByTags, loading: true } };

    case type.GET_BOOKS_BY_TAGS_SUCCESS:
      temp = [...state.booksByTags.data];
      const index = temp.findIndex((e) => e._id === action.data._id);
      // console.log(index);
      if (index === -1) {
        temp.push({ ...action.data });
      } else {
        temp[index] = { ...action.data };
      }
      return {
        ...state,
        booksByTags: {
          ...state.booksByTags,
          loading: false,
          data: [...temp],
        },
      };

    case type.GET_BOOKS_BY_TAGS_FAILED:
      return {
        ...state,
        booksByTags: {
          ...state.booksByTags,
          loading: false,
          error: action.message,
        },
      };

    case type.GET_ALL_TAGS_BY_CATEGORIES:
      return {
        ...state,
        tagsByCategories: { ...state.tagsByCategories, loading: true },
      };

    case type.GET_ALL_TAGS_BY_CATEGORIES_SUCCESS:
      temp = [...state.tagsByCategories.data];
      temp.push(action.data);
      return {
        ...state,
        tagsByCategories: {
          ...state.tagsByCategories,
          loading: false,
          data: [...action.data],
        },
      };

    case type.GET_ALL_TAGS_BY_CATEGORIES_FAILED:
      return {
        ...state,
        tagsByCategories: {
          ...state.tagsByCategories,
          loading: false,
          error: action.message,
        },
      };

    case type.GET_TAGS:
      return { ...state, tags: { loading: true } };

    case type.GET_TAGS_SUCCESS:
      return {
        ...state,
        tags: {
          ...state.tags,
          loading: false,
          data: action.data,
        },
      };

    case type.GET_TAGS_FAILED:
      return {
        ...state,
        tags: {
          ...state.tags,
          loading: false,
          error: action.message,
        },
      };

    default:
      return state;
  }
}
