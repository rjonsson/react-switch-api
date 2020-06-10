import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import NetworkSwitches from "./components/networkswitches";
import FileUpload from "./components/fileupload";
import Settings from "./components/settings";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/NetworkSwitches" />
            </Route>
            <Route exact path="/NetworkSwitches" component={NetworkSwitches} />
            <Route exact path="/FileUpload" component={FileUpload} />
            <Route exact path="/Settings" component={Settings} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
