import * as type from "../types";

const noteAction = {
  getNotesActive: () => {
    return {
      type: type.GET_ALL_NOTES_ACTIVE,
      payload: {},
    };
  },
  putNoteContent: (note) => {
    return {
      type: type.PUT_NOTE_CONTENT,
      payload: note,
    };
  },
  changePageCurrent: (payload) => {
    return {
      type: type.CHANGE_PAGE_CURRENT,
      payload: payload,
    };
  },
};

export default noteAction;
