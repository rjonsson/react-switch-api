import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          SwitchList
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li>
              <Link className="nav-link" to="/">
                Switches <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FileUpload">
                Upload
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Settings">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
