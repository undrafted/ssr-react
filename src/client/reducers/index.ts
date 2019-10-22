import { combineReducers, Dispatch, Action } from "redux";
import usersReducer, { State as UsersState } from "./usersReducer";
import authReducer, { State as AuthState } from "./authReducer";
import adminsReducer, { State as AdminsState } from "./adminsReducer";
import { ThunkDispatch } from "redux-thunk";
import { AxiosInstance } from "axios";

export type State = {
  readonly users: UsersState;
  readonly auth: AuthState;
  readonly admins: AdminsState;
};

export type BindDispatch<T extends Action> = ThunkDispatch<
  State,
  AxiosInstance,
  T
>;

export type MatchRouteThunk = () => Promise<void>;

export type GetState = () => State;

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
});
