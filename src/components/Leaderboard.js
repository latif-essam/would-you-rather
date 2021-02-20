import React from "react";
import Leader from "./Leader";
import { connect } from "react-redux";
import Separator from "react-uwp/Separator";
const Leaderboard = ({ usersIDS }) => {
  return (
    <div>
      <ol style={{ fontSize: 40 }}>
        {usersIDS.map((id) => (
          <li>
            <Leader id={id} key={id} />
            <Separator />
          </li>
        ))}
      </ol>
    </div>
  );
};

function mapStateToProps({ users }) {
  const usersIDS = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );
  return {
    usersIDS,
  };
}

export default connect(mapStateToProps)(Leaderboard);
