import * as type from "../types";

export const userActions = {
  signInWithGoogle: (payload) => {
    console.log({payload});
    return {
      type: type.SIGN_IN_WITH_GOOGLE,
      payload: payload,
    };
  },
};
