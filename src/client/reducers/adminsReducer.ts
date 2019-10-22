import { FETCH_ADMINS, FetchAdminsAction } from "../actions";
import { Person } from "../lib/persons";

export type State = Person[];

export default (state: State = [], action: FetchAdminsAction) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};
