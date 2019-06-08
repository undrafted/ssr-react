export const FETCH_USERS = "fetch_users";

// 3rd instance 'api' comes from thunk.withExtraArgument added on createStore
// it is our custom axios instance
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
