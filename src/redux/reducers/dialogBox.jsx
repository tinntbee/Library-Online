import * as type from "../types";

const initialState = {
  open: false,
  title: "title here",
  message: "message here",
  actions: [
    {
      name: "click me",
      callback: () => {
        alert("hello");
      },
    },
  ],
};

export default function dialogBox(state = initialState, action) {
  switch (action.type) {
    case type.DIALOG_BOX_OPEN:
      return {
        ...state,
        open: true,
        message: action.payload.message,
        title: action.payload.title,
        actions: action.payload.actions,
      };
    case type.DIALOG_BOX_CLOSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}
