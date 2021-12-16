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
};
