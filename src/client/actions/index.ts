import { AxiosInstance } from "axios";
import { Dispatch } from "redux";
import { Person } from "../lib/persons";
import { Auth } from "../lib/auth";

// 3rd argument 'api' comes from thunk.withExtraArgument added on createStore
// it is our custom axios instance

export const FETCH_USERS = "fetch_users";

export type FetchUsersAction = {
  type: typeof FETCH_USERS;
  payload: {
    data: Person[];
  };
};

export const fetchUsers = () => async (
  dispatch: Dispatch,
  getState,
  api: AxiosInstance
) => {
  const res = await api.get("/users");
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const FETCH_CURRENT_USER = "fetch_current_user";

export type FetchCurrentUserAction = {
  type: typeof FETCH_CURRENT_USER;
  payload: {
    data: Auth;
  };
};

export const fetchCurrentUser = () => async (
  dispatch: Dispatch,
  getState,
  api: AxiosInstance
) => {
  const res = await api.get("/current_user");
  console.log(res.data);
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const FETCH_ADMINS = "fetch_admins";

export type FetchAdminsAction = {
  type: typeof FETCH_ADMINS;
  payload: {
    data: Person[];
  };
};
export const fetchAdmins = () => async (
  dispatch: Dispatch,
  getState,
  api: AxiosInstance
) => {
  const res = await api.get("/admins");
  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};
