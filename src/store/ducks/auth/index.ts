import { AuthState, AuthTypes, User } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: AuthState = {
  loggedUser: {
    id: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string).id
      : 0,
    name: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string).name
      : "",
    email: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string).email
      : "",
    role: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string).role
      : "",
    token: localStorage.getItem("token")
      ? (localStorage.getItem("token") as string)
      : "",
  },
  isAuthenticated: localStorage.getItem("token") ? true : false,
  loading: false,
  error: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loggedUser: action.payload.data as User,
        isAuthenticated: true,
        loading: false,
        error: false,
      };
    case AuthTypes.SIGN_IN_FAILURE:
      return { ...state, loading: false, error: true };
    case AuthTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        loggedUser: {
          id: 0,
          name: "",
          email: "",
          role: "",
          token: "",
        },
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default reducer;
