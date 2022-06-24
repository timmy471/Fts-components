export enum AuthActionType {
  AUTH_LOADED = 'AUTH_LOADED',
  AUTH_LOADING = 'AUTH_LOADING',
  REGISTER_FAIL = 'REGISTER_FAIL',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
}

export interface IAuthInitialState {
  user: object;
  isAuthenticated: boolean;
  token: string;
  error: string | null;
  loading: boolean;
}
