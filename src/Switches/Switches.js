import React, { Component } from "react";
import Switch from "./Switch";
import SwitchDetails from "./SwitchDetails";
import SwitchAdd from "./SwitchAdd";

class Switches extends Component {
  state = {
    networkSwitches: [],
    showAdd: false,
    newSwitch: { name: "", domain: "", ip: "", status: 0, ports: [] },
    //newSwitch: "",
  };

  componentDidMount() {
    this.handlePullData();
  }

  handlePullData = () => {
    fetch("http://localhost:5000/api/NetworkSwitches")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ networkSwitches: data });
      })
      .catch(console.log);
  };

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
    console.log(this.state.newSwitch);
  };

  handleDelete = (networkSwitchID) => {
    fetch("http://localhost:5000/api/NetworkSwitches/" + networkSwitchID, {
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
    fetch("http://localhost:5000/api/NetworkSwitches", {
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
      <div className="container mt-4">
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
          </div>
        </div>
        <div className="row">
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
              {this.state.showAdd && (
                <SwitchAdd
                  onChange={this.handleAddNameChange}
                  onToggle={this.toggleAdd}
                  onAdd={this.handleAdd}
                />
              )}

              {this.state.networkSwitches.map((networkSwitch) => (
                <Switch
                  key={networkSwitch.id}
                  onDelete={this.handleDelete}
                  networkSwitch={networkSwitch}
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
