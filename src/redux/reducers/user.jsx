import * as type from "../types";
//{ _id: "", name: "", email: "", nickname: "", avatar: "", hoa: 34 }

const initialState = {
  user: undefined,
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

    case type.SIGN_IN_WITH_GOOGLE:
      return {
        ...state,
        loading: true,
      };

    case type.SIGN_IN_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.res.user,
      };

    case type.SIGN_IN_WITH_GOOGLE_FAILED:
      return {
        ...state,
        loading: false,
        error: "can't not get user, something's wrong!! :<",
      };

    case type.SIGN_OUT:
      return {
        ...state,
        user: undefined,
      };

    case type.RE_SIGN:
      // let user = localStorage.getItem("user");
      // if (user) {
      //   user = JSON.parse(user);
      // }
      // let token = localStorage.getItem("token");
      return {
        ...state,
        loading: true,
      };

    case type.RE_SIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.res.user,
      };

    case type.RE_SIGN_FAILED:
      //localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
