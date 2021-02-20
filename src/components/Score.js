import React from "react";
import Icon from "react-uwp/Icon";
import { Separator } from "react-uwp/Separator";

const Score = ({ qs, ans, total }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {total > 0 && (
        <p className="badge bg-info fs-5 mx-auto">Score : {total}</p>
      )}
      <Separator />
      <div
        className="my-3"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        {qs > 0 && (
          <span style={{ fontSize: 15 }} className="badge bg-danger  me-1 p-2">
            QS Asked : {qs}
          </span>
        )}
        {ans > 0 && (
          <span style={{ fontSize: 15 }} className="badge bg-dark p-2">
            QS Answered : {ans}
          </span>
        )}
      </div>
    </div>
  );
};

export default Score;
