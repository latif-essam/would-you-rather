import React from "react";
import { withRouter } from "react-router-dom";
import ListView from "react-uwp/ListView";
import { connect } from "react-redux";
import Separator from "react-uwp/Separator";
import QSView from "./QSView";
import UserView from "./UserView";

const QS = ({ question: q, user, id, authedUser }) => {
  return (
    <ListView
      listItemStyle={{
        display: "flex",
        justifyContent: "center",
        border: "none",
        maxWidth: 700,
        width: window.innerWidth - 100,
        minWidth: 250,
        padding: 10,
        margin: -9,
      }}
      listSource={[
        <div className="container">
          <div className="row">
            <UserView
              nameSize={4}
              user={user}
              imageSize={80}
              timestamp={q.timestamp}
              me={authedUser}
            />
            <Separator direction="row" className="mb-2" />
          </div>
          <div className="row">
            <QSView q={q} id={id} />
          </div>
        </div>,
      ]}
    />
  );
};

function mapStateToProps({ users, questions }, { id, authedUser }) {
  const question = questions[id];
  return {
    user: users[question.author],
    question,
  };
}

export default withRouter(connect(mapStateToProps)(QS));
