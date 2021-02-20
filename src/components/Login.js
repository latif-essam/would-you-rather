import React from "react";
import { connect } from "react-redux";
import User from "./User";
import { setAuthedUser } from "./../actions/authedUser";
const Login = ({ usersIds, dispatch }) => {
  const handleLogin = (userId) => {
    dispatch(setAuthedUser(userId));
  };
  return (
    <div className="conatiner">
      <div className="row">
        <h2>
          Select how you want to use the app, from the next logging methods
        </h2>
        <div className="col-12">
          <div className="row">
            <div className="col-3">
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-bs-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  Sign with default User
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-bs-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Sign In
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-bs-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="messages"
                >
                  Create new account
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-bs-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="settings"
                >
                  info
                </a>
              </div>
            </div>
            <div className="col-9 text-dark">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  <div className="card pb-2 pl-2 pr-2 pt-2">
                    <h3 className="card-header">Login</h3>
                    <div className="card-body">
                      <h4>
                        In order to use this application you must be
                        authenticated.
                      </h4>
                      <p>Please pick up a user to login</p>
                    </div>
                    <div className="card-group">
                      {usersIds.map((id) => (
                        <User
                          id={id}
                          key={id}
                          handleLogin={(id) => handleLogin(id)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Login);
