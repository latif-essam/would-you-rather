import React from "react";
import Icon from "react-uwp/Icon";
import { formatDate } from "./../utils/helpers";
const UserView = ({ user, timestamp, imageSize = 50, me, nameSize = 10 }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={user.avatarURL}
          alt={`${user.name} Avatar `}
          className={"border border-info"}
          width={imageSize}
          style={{
            borderRadius: "25%",
          }}
        />
      </div>
      <div className="col-md-6">
        <span className={`fs-${nameSize}`}>{user.name}</span>
        {me && <Icon style={{ fontSize: 20 }}>FavoriteStarFill</Icon>}
        {timestamp && <span> {formatDate(timestamp)} </span>}
      </div>
    </div>
  );
};

export default UserView;
