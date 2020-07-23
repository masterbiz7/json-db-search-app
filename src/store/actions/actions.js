export const SET_ACTIVE_USER = "SET_ACTIVE_USER";
export const GET_USERS = "GET_USERS";
export const SET_FILTER = "SET_FILTER";

export const setActiveUser = activeUser => {
  return {
    type: SET_ACTIVE_USER,
    payload: activeUser
  };
};

export const getUsers = clientsList => {
  return {
    type: GET_USERS,
    clientsList: clientsList
  };
};
