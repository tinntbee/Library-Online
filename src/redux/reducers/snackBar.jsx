import * as type from "../types";

const initialState = {
  open: false,
  message: "",
  variant: "success",
  autoHideDuration: 4000,
};

export default function snackBar(state = initialState, action) {
  switch (action.type) {
    case type.SNACK_BAR_OPEN:
      return {
        ...state,
        open: true,
        message: action.payload.message,
        variant: action.payload.variant,
      };
    case type.SNACK_BAR_CLOSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}
