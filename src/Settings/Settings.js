import React, { Component } from "react";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <form>
          <h3>NetMiko Credentials</h3>
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
    );
  }
}

export default Settings;
