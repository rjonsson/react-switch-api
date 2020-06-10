import React, { Component } from "react";

class NetworkSwitch extends Component {
  state = {
    id: this.props.id,
    networkSwitch: this.props.networkSwitch,
  };

  render() {
    return (
      <React.Fragment>
        <tr>
          <th scope="col">{this.props.networkSwitch.id}</th>
          <th scope="col">{this.props.networkSwitch.name}</th>
          <th scope="col">{this.props.networkSwitch.domain}</th>
          <th scope="col">{this.props.networkSwitch.ip}</th>
          <th scope="col">
            <button
              onClick={() => this.props.onDelete(this.props.networkSwitch.id)}
              type="button"
              className="btn btn-danger"
            />
          </th>
        </tr>
      </React.Fragment>
    );
  }
}

export default NetworkSwitch;
