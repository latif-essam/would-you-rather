import React from "react";
import { connect } from "react-redux";
import UserView from "./UserView";
import Score from "./Score";
const Leader = ({ user, isMe }) => {
  const { answers, questions } = user;
  const answered = Object.keys(answers).length;
  console.log(answered);
  const asked = questions.length;
  const sum = answered + asked;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 15,
      }}
    >
      <UserView
        user={user}
        key={user.id}
        me={isMe}
        imageSize={110}
        nameSize={4}
      />
      <Score qs={asked} ans={answered} total={sum} />
    </div>
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
