import * as type from "../types";
//{ _id: "", name: "", email: "", nickname: "", avatar: "", hoa: 34 }

const initialState = {
  notes: [],
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
    case type.PUT_NOTE_CONTENT:
      let newNotes = [...state.notes];
      let isHad = false;
      for (let index = 0; index < newNotes.length; index++) {
        const newNote = action.payload;
        if (newNote && newNotes[index]._id === newNote._id) {
          newNotes[index] = newNote;
          isHad = true;
        }
      }
      if (!isHad) {
        newNotes.push(action.payload);
      }
      return {
        ...state,
        notes: [...newNotes],
      };
    default:
      return state;
  }
}
