import { FETCH_ADMINS, FetchAdminsAction } from "../actions";

export default (state = [], action: FetchAdminsAction) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};
