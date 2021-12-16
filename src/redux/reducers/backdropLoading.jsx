import * as type from "../types";

const initialState = {
  loading: false,
};

export default function backdropLoading(state = initialState, action) {
  switch (action.type) {
    case type.SET_BACKDROP_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
