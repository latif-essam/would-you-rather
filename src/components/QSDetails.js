import React, { useEffect, useState } from "react";
import ListView from "react-uwp/ListView";
import { connect } from "react-redux";
import Separator from "react-uwp/Separator";
import QSDetailsVote from "./QSDetailsVote";
import QSDetailsResult from "./QSDetailsResult";
import UserView from "./UserView";
import { handleSetQuestionAnswer } from "../actions/questions";

const QSDetails = ({
  authedUser,
  id,
  question: q,
  isAnswered,
  vote,
  user,
  dispatch,
}) => {
  const saveQsAns = (answer) => {
    dispatch(handleSetQuestionAnswer(authedUser, id, answer));
  };

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
              <QSDetailsResult question={q} vote={vote} />
            ) : (
              <QSDetailsVote question={q} saveQsAns={saveQsAns} />
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
