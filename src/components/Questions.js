import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "react-uwp/Button";
import QS from "./QS";
import Alert from "./Alert";

const Questions = ({ AnsweredQS, unAnsweredQS }) => {
  const [currentTab, setCurrentTab] = useState("QS");

  const sortedAnsweredQS = Object.values(AnsweredQS)
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((q) => q);
  const sortedUnAnsweredQS = Object.values(unAnsweredQS)
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((q) => q);
  return (
    <div className="container">
      <div className="col-12">
        <ul
          className="nav nav-pills mb-3"
          id="pills-tab"
          role="tablist"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <li className="nav-item" role="presentation">
            <Button
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              icon="Handwriting"
              style={{
                color: currentTab === "QS" ? "white" : "black",
              }}
              background={
                currentTab === "QS" ? "#E65100" : "rgba(255, 255, 255, 0.4)"
              }
              onClick={() => setCurrentTab("QS")}
            >
              Question to Answer
            </Button>
          </li>
          <li className="nav-item" role="presentation">
            <Button
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              icon="CheckmarkListviewLegacy"
              style={{
                color: currentTab === "Ans" ? "white" : "black",
              }}
              background={
                currentTab === "QS" ? "rgba(255, 255, 255, 0.2)" : "#E65100"
              }
              onClick={() => setCurrentTab("Ans")}
            >
              Questions got Answered
            </Button>
          </li>
        </ul>
        <div
          className="tab-content py-5"
          id="pills-tabContent"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div style={{ margin: "10 10 10 0" }}>
              {sortedUnAnsweredQS.length === 0 ? (
                <Alert type="info" />
              ) : (
                <ul style={{ listStyle: "none" }}>
                  {sortedUnAnsweredQS.map((q) => (
                    <li style={{ marginBottom: 15 }} key={q.id}>
                      <QS question={q} id={q.id} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div style={{ margin: "10 10 10 0" }}>
              {sortedAnsweredQS === 0 ? (
                <Alert type="info" />
              ) : (
                <ul style={{ listStyle: "none" }}>
                  {sortedAnsweredQS.map((q) => (
                    <li style={{ marginBottom: 15 }} key={q.id}>
                      <QS question={q} id={q.id} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser, questions }) {
  const unAnsweredQS = Object.values(questions).filter(
    (question) =>
      !question.optionOne.votes.includes(authedUser) &&
      !question.optionTwo.votes.includes(authedUser)
  );
  const AnsweredQS = Object.values(questions).filter(
    (question) =>
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
  );
  return {
    unAnsweredQS,
    AnsweredQS,
  };
}

export default connect(mapStateToProps)(Questions);
