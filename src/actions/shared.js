import { hideLoading, showLoading } from "react-redux-loading";

import { getInitialData } from "./../utils/API";

import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export const AUTHED_ID = "sarah_edo"; //as an example
export const LOGED_IN_USER = "LOGED_IN_USER";
export const LOGED_OUT_USER = "LOGED_OUT_USER";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
