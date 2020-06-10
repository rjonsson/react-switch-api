import React, { Component } from "react";
import NetworkSwitches from "./components/networkswitches";
import Settings from "./components/settings";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/NetworkSwitches" component={NetworkSwitches} />
          <Route exact path="/">
            <Redirect to="/NetworkSwitches" />
          </Route>
          <Route exact path="/Settings" component={Settings} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
