import React from "react";
import Icon from "react-uwp/Icon";
import { formatDate } from "./../utils/helpers";
const UserView = ({ user, timestamp, me, viewType = "question" }) => {
  const cases = {
    normal: { col1: 6, fs: 4, imgSize: 100 },
    board: { col1: 6, fs: 4, imgSize: 110 },
    question: { col1: 4, fs: 5, imgSize: 110 },
  };
  const currentView = cases[viewType];
  return (
    <div className="row">
      <div className={`col-md-${currentView.col1}`}>
        <img
          src={user.avatarURL}
          alt={`${user.name} Avatar `}
          className={"border border-info"}
          width={currentView.imgSize}
          style={{
            borderRadius: "25%",
          }}
        />
      </div>
      <div className="col-md">
        <p className={`fs-${currentView.fs}`}>{user.name}</p>
        {me && <Icon style={{ fontSize: 20 }}>FavoriteStarFill</Icon>}
        {timestamp && <span> {formatDate(timestamp)} </span>}
      </div>
    </div>
  );
};

export default UserView;
