import * as type from "../types";

const noteAction = {
  getNotesActive: () => {
    return {
      type: type.GET_ALL_NOTES_ACTIVE,
      payload: {},
    };
  },
};

export default noteAction;
