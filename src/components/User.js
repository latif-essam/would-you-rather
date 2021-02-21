import React from "react";
import { connect } from "react-redux";
import Button from "react-uwp/Button";
import UserView from "./UserView";

const User = ({ user, id, handleLogin }) => {
  return (
    <div className="shadow text-center">
      <UserView viewType="login" user={user} key={user.id} />
      {handleLogin && (
        <Button className="mb-2" onClick={() => handleLogin(id)}>
          Login
        </Button>
      )}
    </div>
  );
};

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user,
  };
}

export default connect(mapStateToProps)(User);
