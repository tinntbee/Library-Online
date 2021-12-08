import * as type from "../types";

export const userActions = {
  signInWithGoogle: (payload) => {
    return {
      type: type.SIGN_IN_WITH_GOOGLE,
      payload: payload,
    };
  },
  signOut: (payload) => {
    return {
      type: type.SIGN_OUT,
      payload: payload,
    };
  },
  reSign: (payload) => {
    return {
      type: type.RE_SIGN,
      payload: payload,
    };
  },
};
