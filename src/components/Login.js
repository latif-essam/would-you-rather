import React from "react";
import { connect } from "react-redux";
import Tabs, { Tab } from "react-uwp/Tabs";
import Icon from "react-uwp/Icon";

import User from "./User";
import { setAuthedUser } from "./../actions/authedUser";
import ListView from "react-uwp/ListView";
import Alert from "./Alert";
import Footer from "./Footer";
import { Separator } from "react-uwp";
const Login = ({ usersIds, dispatch }) => {
  const handleLogin = (userId) => {
    dispatch(setAuthedUser(userId));
  };
  return (
    <>
      <ListView
        className="mx-auto "
        style={{
          width: "fit-content",
          margin: "0 auto",
        }}
        listItemStyle={{
          display: "grid",
          border: "none",
          marginBottom: -10,
          marginTop: -10,
          paddingBottom: 10,
          paddingTop: 10,
        }}
        listSource={[
          <div className="conatiner-fluid ">
            <div className="row">
              <div className="col ms-4 mx-4">
                <Tabs
                  style={{ display: "block", margin: "10px 0" }}
                  renderTitle={(title) => (
                    <span>
                      <Icon>{title}</Icon>
                      <span style={{ marginLeft: 12 }}>{title}</span>
                    </span>
                  )}
                >
                  <Tab title="SwitchUser">
                    <div className="card-body">
                      <h4>
                        In order to use this application you must be
                        authenticated.
                      </h4>
                      <p className="fs-4">Please pick up a user to login</p>
                    </div>
                    <div className="card-group text-center">
                      {usersIds.map((id) => (
                        <User
                          id={id}
                          key={id}
                          handleLogin={(id) => handleLogin(id)}
                        />
                      ))}
                    </div>
                  </Tab>
                  <Tab title="Accounts" className={"my-4 p-2"}>
                    <Alert type={"main"}>
                      Soon you will be able to create your own accounts.
                    </Alert>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>,
        ]}
      />
      <Separator className="mt-5 my-5" />
      <Footer />
    </>
  );
};

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Login);
