import * as type from "../types";

const initialState = {
  user: { id: "", name: "", email: "", nickname: "", avatar: "", hoa: 34 },
  loading: false,
  error: "",
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case type.SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };

    case type.GET_USER:
      return {
        ...state,
        loading: true,
        user: action.payload,
      };

    case type.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      };

    case type.GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: "can't not get user, something's wrong!! :<",
      };

    default:
      return state;
  }
}
