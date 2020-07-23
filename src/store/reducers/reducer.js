import clients from "../../data/clients.json";
import { SET_ACTIVE_USER, GET_USERS, SET_FILTER } from "../actions/actions";

export const initialState = {
  users: [...clients],
  activeUser: null,
  filter: ""
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_USER:
      return { ...state, activeUser: payload };
    case GET_USERS:
      return {...state.users, payload}
    case SET_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export default reducer;
