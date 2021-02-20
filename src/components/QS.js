import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "react-uwp/Button";
import ListView from "react-uwp/ListView";
import { formatDate } from "./../utils/helpers";
import { connect } from "react-redux";
import Separator from "react-uwp/Separator";
import QSView from "./QSView";
import UserView from "./UserView";

const QS = ({ question: q, user, id }) => {
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
          <UserView user={user} timestamp={q.timestamp} />
          <Separator direction="row" className="mb-2" />
          <QSView q={q} id={id} />
        </div>,
      ]}
    />
  );
};

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  return {
    user: users[question.author],
    question,
  };
}

export default withRouter(connect(mapStateToProps)(QS));
