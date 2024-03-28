import { action } from "typesafe-actions";
import { AuthTypes, User } from "./types";

export const signInRequest = (email: string, password: string) =>
  action(AuthTypes.SIGN_IN_REQUEST, { email, password });

export const signInSuccess = (data: User) =>
  action(AuthTypes.SIGN_IN_SUCCESS, { data });

export const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);

export const signOutRequest = () => action(AuthTypes.SIGN_OUT_REQUEST);
