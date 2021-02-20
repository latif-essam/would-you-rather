import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "react-uwp/Button";
import ListView from "react-uwp/ListView";
import { connect } from "react-redux";
import { saveQuestionAnswer } from "../utils/API";
import Separator from "react-uwp/Separator";
import { handleSetQuestionAnswer } from "../actions/questions";
import QSDetailsVote from "./QSDetailsVote";
import QSDetailsResult from "./QSDetailsResult";
import UserView from "./UserView";

const QSDetails = ({
  authedUser,
  id,
  question: q,
  isAnswered,
  vote,
  user,
  dispatch,
}) => {
  // const saveQuestionAnswer = (answer) => {
  //   dispatch(handleSetQuestionAnswer(authedUser, id, answer));
  // };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", (e) => setScreenWidth(window.innerWidth));
  }, [screenWidth]);
  return q ? (
    <ListView
      listItemStyle={{
        display: "flex",
        justifyContent: "center",
        border: "none",
        maxWidth: 700,
        width: screenWidth - 100,
        minWidth: 250,
      }}
      listSource={[
        <div className="container">
          <UserView user={user} timestamp={q.timestamp} />
          <Separator />
          <div className="row">
            {isAnswered ? (
              <QSDetailsResult question={q} user={user} vote={vote} />
            ) : (
              <QSDetailsVote
                question={q}
                user={user}
                dispatch={dispatch}
                authedUser={authedUser}
                id={id}
              />
            )}
          </div>
        </div>,
      ]}
    />
  ) : (
    <p>Error Question is not found</p>
  );
};

function mapStateToProps({ authedUser, questions, users }, props) {
  const id = props.match.params.id;
  const question = questions[id];
  const questionExists = !question ? false : true;
  const isAnswered = !!question
    ? question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    : false;
  const vote = isAnswered
    ? question.optionOne.votes.includes(authedUser)
      ? "optionOne"
      : "optionTwo"
    : null;
  const user = users && question ? users[question.author] : null;
  return {
    authedUser,
    id,
    question,
    questionExists,
    isAnswered,
    vote,
    user,
  };
}
export default connect(mapStateToProps)(QSDetails);
