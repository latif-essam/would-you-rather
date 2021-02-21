import React from "react";
import Separator from "react-uwp/Separator";
import Button from "react-uwp/Button";
import Icon from "react-uwp/Icon";

import { NavLink } from "react-router-dom";

const QSDetailsResult = ({ question: q, vote }) => {
  const votesAnswer1 = q.optionOne.votes.length;
  const votesAnswer2 = q.optionTwo.votes.length;
  const allAnswers = votesAnswer1 + votesAnswer2;
  const percentageAnswer1 =
    votesAnswer1 === 0 ? 0 : Math.round((votesAnswer1 / allAnswers) * 100);
  const percentageAnswer2 =
    votesAnswer2 === 0 ? 0 : Math.round((votesAnswer2 / allAnswers) * 100);

  return (
    <div className="row">
      <p className="fs-3">Would you Rather ...?!</p>
      <div className="col-md-5">
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${percentageAnswer1}%` }}
          ></div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p> votes : {votesAnswer1}</p>
          {vote === "optionOne" && (
            <span className="badge badge-info">
              <Icon>CheckmarkListviewLegacy</Icon>
            </span>
          )}
          <span>{percentageAnswer1}%</span>
        </div>
        <p className="fs-4 my-0 fw-light">{q.optionOne.text}</p>
      </div>
      <div className="col-md-1 mx-auto">
        <Separator
          className="ms-3"
          direction="column"
          style={{ height: "100%" }}
        />
      </div>
      <div className="col-md-5">
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${percentageAnswer2}%` }}
          ></div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p> votes : {votesAnswer2}</p>
          {vote === "optionTwo" && (
            <span className="badge badge-info mt-0">
              <Icon>EditLegacy</Icon>
            </span>
          )}
          <span>{percentageAnswer2}%</span>
        </div>
        <p className="fs-4 my-0 fw-light">{q.optionTwo.text}</p>
      </div>
      <Separator />
      <Button className="text-center mx-auto mt-2" style={{ width: "30%" }}>
        <NavLink className="btn m-0 p-0 fs-5 text-success" to={"/"} exact>
          back
        </NavLink>
      </Button>
    </div>
  );
};

export default QSDetailsResult;
