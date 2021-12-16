import * as type from "../types";

const backdropLoadingAction = {
  setLoading: (payload) => {
    return {
      type: type.SET_BACKDROP_LOADING,
      payload: payload,
    };
  },
};

export default backdropLoadingAction;
