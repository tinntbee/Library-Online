import * as type from "../types";

const dialogAction = {
  open: ({ title, message, actions }) => {
    return {
      type: type.DIALOG_BOX_OPEN,
      payload: { title, message, actions },
    };
  },
  close: () => {
    return {
      type: type.DIALOG_BOX_CLOSE,
      payload: {},
    };
  },
};

export default dialogAction;
