import React from "react";
import { connect } from "react-redux";
import UserView from "./UserView";
import Score from "./Score";
import ListView from "react-uwp/ListView";

const Leader = ({ user, isMe }) => {
  const { answers, questions } = user;
  const answered = Object.keys(answers).length;
  console.log(answered);
  const asked = questions.length;
  const sum = answered + asked;

  return (
    <ListView
      listItemStyle={{
        display: "grid",
        border: "none",
        maxWidth: 1000,
        width: window.innerWidth - 100,
        minWidth: 250,
        padding: 10,
        margin: -9,
      }}
      listSource={[
        <>
          <UserView user={user} key={user.id} me={isMe} viewType={"board"} />
          <Score total={sum} asked={asked} answered={answered} />
        </>,
      ]}
    />
  );
};

function mapStateToProps({ authedUser, users }, { id }) {
  const user = users[id];
  const isMe = user.id === authedUser;
  return {
    user,
    isMe,
  };
}

export default connect(mapStateToProps)(Leader);
