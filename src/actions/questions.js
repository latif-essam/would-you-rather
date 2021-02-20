// import { hideLoading, showLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from "../utils/API.js";
import { showLoading, hideLoading } from "react-redux-loading";
import { setUserAnswer, setUserQuestion } from "./users.js";

export const ADD_QUESTION = "ADD_QUESTION";
export const SET_QUESTION_ANSWER = "SET_QUESTION_ANSWER";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
export function setQuestionAnswer(answer) {
  return {
    type: SET_QUESTION_ANSWER,
    answer,
  };
}

export function handleAddQuestion(a, b, author) {
  return (dispatch) => {
    dispatch(showLoading());

    saveQuestion({
      optionOneText: a,
      optionTwoText: b,
      author,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(setUserQuestion(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleSetQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());

    saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(setQuestionAnswer({ authedUser, qid, answer }));
        dispatch(setUserAnswer({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading()));
  };
}
