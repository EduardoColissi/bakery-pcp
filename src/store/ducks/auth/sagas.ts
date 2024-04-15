import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { signInRequest, signInSuccess, signInFailure } from "./actions";
import { api } from "../../../services/api";

export function* signIn(action: ActionType<typeof signInRequest>) {
  try {
    const { email, password } = action.payload;
    console.log(email, password);
    const response: any = yield call(api.post, "login", { email, password });
    if (response.data.user.token !== null) {
      localStorage.setItem("token", response.data.user.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      api.defaults.headers.Authorization = `Bearer ${response.data.user.token}`;
      yield put(signInSuccess(response.data.user));
      window.location.href = "/dashboard";
    }
  } catch (error) {
    console.log(error);
    yield put(signInFailure());
  }
}

export function* signOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  api.defaults.headers.Authorization = "";
}
