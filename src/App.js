import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Switches from "./Switches/Switches";
import SwitchUpload from "./SwitchUpload/SwitchUpload";
import Settings from "./Settings/Settings";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/Switches" />
            </Route>
            <Route exact path="/Switches" component={Switches} />
            <Route exact path="/SwitchUpload" component={SwitchUpload} />
            <Route exact path="/Settings" component={Settings} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
