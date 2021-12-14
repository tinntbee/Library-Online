import * as type from "../types";

export const snackBarActions = {
  open: (payload) => {
    return {
      type: type.SNACK_BAR_OPEN,
      payload: payload,
    };
  },
  close: () => {
    return {
      type: type.SNACK_BAR_CLOSE,
    };
  },
};
