import React, { Component } from "react";
import SwitchRow from "./SwitchRow";
import SwitchAdd from "./SwitchAdd";

class Switches extends Component {
  state = {
    networkSwitches: [],
    showAdd: false,
    showDetails: false,
    newSwitch: { name: "", domain: "", ip: "", status: 0, ports: [] },
    apiUrl: "http://localhost:5000/api/NetworkSwitches/",
    //selectedSwitches: [],
  };

  componentDidMount() {
    this.handlePullData();
  }

  toggleAdd = () => {
    this.setState((oldState) => ({
      newsSwitch: { name: "", domain: "", ip: "", status: 0, ports: [] },
      showAdd: !oldState.showAdd,
    }));
  };

  handleAddNameChange = (event) => {
    this.setState((oldState) => ({
      newSwitch: { name: event, domain: "", ip: "", status: 0, ports: [] },
    }));
    // TODO: Keep error-label until it satisfies standard
    // TODO: Add check-property to OK for handleAdd
  };

  handlePullData = () => {
    fetch(this.state.apiUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ networkSwitches: data });
      })
      .catch(console.log);
  };

  handleDelete = (networkSwitchID) => {
    fetch(this.state.apiUrl + networkSwitchID, {
      method: "DELETE",
    })
      .then((response) => response.text()) // or res.json()
      .then((response) => {
        console.log(response);
        this.handlePullData();
      })
      .catch(console.log);
  };

  handleAdd = () => {
    // TODO: Check for OK
    fetch(this.state.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.newSwitch),
    })
      .then((response) => response.text()) // or res.json()
      .then((response) => {
        console.log(response);
        this.toggleAdd();
        this.handlePullData();
      })
      .catch(console.log);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <h3>Switches</h3>
          </div>
          <div className="col text-right">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => this.toggleAdd()}
            >
              +
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.toggleDetails()}
            >
              D
            </button>
          </div>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered m-2">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Hostname</th>
                <th scope="col">Model</th>
                <th scope="col">Reachable</th>
                <th scope="col">Sync</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.showAdd && (
                <SwitchAdd
                  onChange={this.handleAddNameChange}
                  onToggle={this.toggleAdd}
                  onAdd={this.handleAdd}
                />
              )}

              {this.state.networkSwitches.map((networkSwitch) => (
                <SwitchRow
                  key={networkSwitch.id}
                  onDelete={this.handleDelete}
                  networkSwitch={networkSwitch}
                  toggleDetails={this.toggleDetails}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Switches;
