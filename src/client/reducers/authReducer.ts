import { FETCH_CURRENT_USER, FetchCurrentUserAction } from "../actions";

export default (state = null, action: FetchCurrentUserAction) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};
