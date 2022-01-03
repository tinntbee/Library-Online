import * as type from "../types";

export const commentActions = {
  get: (payload) => {
    return {
      type: type.GET_COMMENTS,
      payload: payload,
    };
  },
  post: (payload) => {
    return {
      type: type.POST_COMMENT,
      payload: payload,
    };
  },
  remove: (id) => {
    return {
      type: type.REMOVE_COMMENT,
      payload: id,
    };
  },
};
