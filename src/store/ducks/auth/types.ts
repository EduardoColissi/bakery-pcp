/**
 * Action Types
 */

export enum AuthTypes {
  SIGN_IN_REQUEST = "@auth/SIGN_IN_REQUEST",
  SIGN_IN_SUCCESS = "@auth/SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE = "@auth/SIGN_IN_FAILURE",
  SIGN_OUT_REQUEST = "@auth/SIGN_OUT_REQUEST",
}

/**
 * Data Types
 */

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  token: string;
}

/**
 * State Types
 */

export interface AuthState {
  readonly loggedUser: User;
  readonly isAuthenticated: boolean;
  readonly loading: boolean;
  readonly error: boolean;
}
