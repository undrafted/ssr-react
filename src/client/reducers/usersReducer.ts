import { FETCH_USERS, FetchUsersAction } from "../actions";
import { Person } from "../lib/persons";

export type State = Person[];

export default (state: State = [], action: FetchUsersAction) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};
