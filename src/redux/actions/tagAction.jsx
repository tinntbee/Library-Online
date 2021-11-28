import * as type from "../types";

const tagAction = {
  getAllTagsByCategories: () => {
    return {
      type: type.GET_ALL_TAGS_BY_CATEGORIES,
      payload: {},
    };
  },
};

export default tagAction;
