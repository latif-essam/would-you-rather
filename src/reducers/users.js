import {
  RECEIVE_USERS,
  ADD_USER,
  SET_USER_QUESTION,
  SET_USER_ANSWER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER:
      return state.concat([action.user]);
    case SET_USER_QUESTION:
      const { author } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([action.question.id]),
        },
      };
    case SET_USER_ANSWER:
      const { authedUser } = action.answer;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [action.answer.qid]: action.answer.answer,
          },
        },
      };
    default:
      return state;
  }
}
