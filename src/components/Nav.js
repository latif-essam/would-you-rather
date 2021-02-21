import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";

import Button from "react-uwp/Button";
import { Icon } from "react-uwp/Icon";
import { ListView } from "react-uwp/ListView";
const Nav = ({ user, dispatch, authedUser }) => {
  const toggleLogin = (e) => {
    if (authedUser !== null) {
      dispatch(removeAuthedUser());
      return;
    }
  };

  const authedState = !!user ? true : false;

  return (
    <ListView
      style={{ width: "100%" }}
      listItemStyle={{
        display: "grid",
        border: "none",
        marginBottom: -10,
        marginTop: -10,
        paddingBottom: 10,
        paddingTop: 10,
      }}
      listSource={[
        <>
          <nav className="navbar navbar-expand-lg navbar-light text-info">
            <div className="container-fluid">
              {user && authedState && (
                <div className="d-flex justify-content-between">
                  <div>
                    <ul className="navbar-nav d-flex mb-2 mb-lg-0 ml-4">
                      <li className="nav-item">
                        <NavLink
                          className="nav-link active h4"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Would You Rather"
                          to={"/"}
                        >
                          <Icon>CancelLegacy</Icon>
                          WUR
                          <Icon>AcceptLegacy</Icon>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link h5 " to={"/add"}>
                          New Question
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link h5" to={"/leaderboard"}>
                          LeaderBoard
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <ul
                    className="navbar-nav m-0 p-0 px-1 mx-5 shadow"
                    style={{ borderRadius: 20 }}
                  >
                    <li className="nav-item my-auto">
                      <p className="nav-link my-1">{user.name}</p>
                    </li>
                    <li className="nav-item lh-0">
                      <img
                        className={"border border-info mt-1 ms-4"}
                        width={50}
                        src={user.avatarURL}
                        alt={user.name}
                        style={{
                          marginLeft: 0,
                          padding: 0,
                          borderRadius: "25%",
                        }}
                      />
                    </li>
                  </ul>

                  <Button className="text-dark" onClick={() => toggleLogin()}>
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </nav>
        </>,
      ]}
    />
  );
};
function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user,
  };
}
export default connect(mapStateToProps)(Nav);
