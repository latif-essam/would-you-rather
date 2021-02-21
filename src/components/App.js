import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// React UWP
import { Theme, getTheme } from "react-uwp/Theme";

// import LoadingBar from "react-redux-loading";
import Nav from "./Nav/Nav";
import Login from "./Login";

import { handleInitialData } from "../actions/shared";
import Leaderboard from "./Leaderboard";
import NewQS from "./NewQS";
import Questions from "./Questions";
import Separator from "./Separator";
import QSDetails from "./QSDetails";
import Alert from "./Alert";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  images = {
    1: "https://images7.alphacoders.com/411/thumbbig-411820.jpg",
    2: "https://images.alphacoders.com/899/thumb-1920-899574.jpg",
    3: "https://images4.alphacoders.com/378/thumbbig-37864.jpg",
    4: "https://images2.alphacoders.com/521/thumbbig-521718.jpg",
    5: "https://images5.alphacoders.com/462/thumbbig-462370.jpg",
    6: "https://pixabay.com/get/57e9d042494fad00f5d89960c62e367d1d3bdbe45550_1920.jpg",
  };
  render() {
    const { readyState, authedState } = this.props;
    return (
      <Fragment>
        <Theme
          theme={getTheme({
            themeName: "dark",
            accent: "#0078D7",
            useFluentDesign: true,
          })}
        >
          <div className="container">
            {readyState && <Nav />}
            {readyState && authedState && (
              <Separator style={{ marginBottom: 25 }} />
            )}
            {readyState && authedState && (
              <Switch>
                <Route path="/" exact component={Questions} />
                <Route path="/questions/:id" exact component={QSDetails} />

                <Route path="/add" exact component={NewQS} />

                <Route path="/leaderboard" exact component={Leaderboard} />
                <Route>
                  <Alert type="danger" />
                </Route>
              </Switch>
            )}
            {readyState && !authedState && <Login />}
          </div>
        </Theme>
      </Fragment>
    );
  }
}
function mapStateToProps({ authedUser, users, questions }) {
  return {
    users,
    readyState:
      Object.keys(users).length > 0 && Object.keys(questions).length > 0,
    authedState: authedUser != null,
  };
}

export default connect(mapStateToProps)(App);
