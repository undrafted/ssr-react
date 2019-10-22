import { FETCH_CURRENT_USER, FetchCurrentUserAction } from "../actions";
import { Auth } from "../lib/auth";

export type State = null | boolean | Auth;

export default (state: State = null, action: FetchCurrentUserAction) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};
