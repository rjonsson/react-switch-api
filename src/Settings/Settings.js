import React, { Component } from "react";
import "./settings.css";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <div className="subheader">
          <h3>NetMiko Credentials</h3>
        </div>
        <div className="maincontent">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input type="username" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-secondary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
