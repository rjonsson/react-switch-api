import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Switches from "./Switches/Switches";
import Details from "./Details/Details";
import Upload from "./Upload/Upload";
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
            <Route exact path="/Details/:id" component={Details} />
            <Route exact path="/Upload" component={Upload} />
            <Route exact path="/Settings" component={Settings} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
