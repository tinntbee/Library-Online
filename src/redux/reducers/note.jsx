import * as type from "../types";
//{ _id: "", name: "", email: "", nickname: "", avatar: "", hoa: 34 }

const initialState = {
  notes: [],
  notesDetail: [],
  loading: false,
  error: "",
};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case type.GET_ALL_NOTES_ACTIVE:
      return {
        ...state,
        loading: true,
      };
    case type.GET_ALL_NOTES_ACTIVE_SUCCESS:
      return {
        ...state,
        notes: [...action.data],
        loading: false,
      };
    case type.GET_ALL_NOTES_ACTIVE_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
