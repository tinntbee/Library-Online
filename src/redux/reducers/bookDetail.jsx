import * as type from "../types";

const initialState = {
  book: {
    data: {},
    loading: true,
    error: "",
  },
  forum: {
    data: [],
    loading: true,
    error: "",
  },
};

export default function bookDetail(state = initialState, action) {
  let newForum;
  switch (action.type) {
    case type.GET_BOOK_DETAIL:
      return { ...state, book: { ...state.book, loading: true } };
    case type.GET_BOOK_DETAIL_SUCCESS:
      return {
        ...state,
        book: { ...state.book, loading: false, data: action.data },
      };
    case type.GET_BOOK_DETAIL_FAILED:
      return {
        ...state,
        book: { ...state.book, loading: false, error: action.data },
      };
    case type.CHANGE_BOOK_DETAIL:
      return {
        ...state,
        book: { ...state.book, data: action.payload },
      };
    case type.GET_COMMENTS:
      return { ...state, forum: { ...state.forum, loading: true, data: [] } };
    case type.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        forum: { ...state.forum, loading: false, data: action.data },
      };
    case type.GET_COMMENTS_FAILED:
      return {
        ...state,
        forum: { ...state.forum, loading: false, error: action.data },
      };
    case type.POST_COMMENT:
      newForum = [...state.forum.data];
      newForum.unshift(action.payload);
      return {
        ...state,
        forum: {
          ...state.forum,
          data: [...newForum],
        },
      };
    case type.REMOVE_COMMENT:
      newForum = [...state.forum.data];
      newForum = newForum.filter((item) => item._id !== action.payload);
      return {
        ...state,
        forum: {
          ...state.forum,
          data: [...newForum],
        },
      };
    case type.POST_REPLY:
      const { reply, commentIndex } = action.payload;
      newForum = [...state.forum.data];
      newForum[commentIndex].replies.unshift(reply);
      return {
        ...state,
        forum: {
          ...state.forum,
          data: [...newForum],
        },
      };
    default:
      return state;
  }
}
