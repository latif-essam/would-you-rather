import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// React UWP
import { Theme, getTheme } from "react-uwp/Theme";

// import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
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
    1: "https://images.unsplash.com/photo-1612703232530-98a2fb351e9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    2: "https://pixabay.com/get/57e9d042494fad00f5d89960c62e367d1d3bdbe45550_1920.jpg",
    3: "https://images.unsplash.com/photo-1606055854326-12a2fdcac6c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  };
  render() {
    // checking if the all data is loaded and user has loged in
    const { readyState, authedState } = this.props;
    return (
      <Fragment>
        <Theme
          theme={getTheme({
            themeName: "dark",
            accent: "#0078D7",
            useFluentDesign: true,
            desktopBackgroundImage: this.images[3],
          })}
        >
          <header>
            {readyState && authedState && (
              <>
                <Nav />
                <Separator />
              </>
            )}
          </header>
          <main className="container">
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
          </main>
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
