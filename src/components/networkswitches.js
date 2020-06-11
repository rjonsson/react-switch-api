import React, { Component } from "react";
import NetworkSwitch from "./networkswitch";

class NetworkSwitches extends Component {
  state = {
    /*networkSwitches: [
      { id: 0, name: "se2961sw01", domain: "skanska.net", ip: "10.37.41.23" },
      { id: 1, name: "se2961sw02", domain: "skanska.net", ip: "10.37.41.24" },
      { id: 2, name: "se2961sw03", domain: "skanska.net", ip: "10.37.41.25" },
      { id: 3, name: "se2961sw03", domain: "skanska.net", ip: "10.37.41.25" },
    ],*/
    networkSwitches: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/NetworkSwitches")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ networkSwitches: data });
      })
      .catch(console.log);
  }

  handleDelete = (networkSwitchID) => {
    const networkSwitches = this.state.networkSwitches.filter(
      (ns) => ns.id !== networkSwitchID
    );
    this.setState({ networkSwitches });
  };

  render() {
    console.log(this.state.networkSwitches);

    return (
      <div className="container">
        <h3>Switches</h3>
        <table className="table table-striped table-bordered m-2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hostname</th>
              <th scope="col">IP</th>
              <th scope="col">Ports</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.networkSwitches.map((networkSwitch) => (
              <NetworkSwitch
                key={networkSwitch.id}
                onDelete={this.handleDelete}
                networkSwitch={networkSwitch}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NetworkSwitches;
