export const RECEIVE_USERS = "RECEIVE_USERS";
export const SET_USER_QUESTION = "SET_USER_QUESTION";
export const SET_USER_ANSWER = "SET_USER_ANSWER";
export const ADD_USER = "ADD_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function setUserQuestion(question) {
  return {
    type: SET_USER_QUESTION,
    question,
  };
}

export function setUserAnswer(answer) {
  return {
    type: RECEIVE_USERS,
    answer,
  };
}

// export const handleAddUser = (user) => {
//   return (dispatch) => {
//     dispatch(addUser(user));
//     return;
//   };
// };

// function addUser(user) {
//   return {
//     type: ADD_USER,
//     user,
//   };
// }
