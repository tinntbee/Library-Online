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
  closeNote: (_id) => {
    return {
      type: type.CLOSE_NOTES,
      payload: _id,
    };
  },
};

export default noteAction;
