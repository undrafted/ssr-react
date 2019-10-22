import { FETCH_USERS, FetchUsersAction } from "../actions";

export default (state = [], action: FetchUsersAction) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};
