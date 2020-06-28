import React, { Component } from "react";
import Device from "./Device";
import DeviceInfo from "./DeviceInfo";
import PortInfo from "./PortInfo";
import "./switch.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networkSwitch: {},
      selectedPort: null,
      apiUrl: "http://localhost:5000/api/NetworkSwitches/",
    };
  }

  componentDidMount() {
    this.handlePullDataOne();
  }

  handlePullDataOne = () => {
    fetch(this.state.apiUrl + this.props.match.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ networkSwitch: data });
      })
      .catch(console.log);
  };

  handlePortSelect = (portId) => {
    this.setState((oldState) => ({
      selectedPort: portId,
    }));
  };

  handleVlanChange = () => {};

  render() {
    return (
      <div className="wrapper">
        <div className="subheader">
          <h1>{this.state.networkSwitch.name}</h1>
        </div>
        <div className="maincontent mt-5">
          <Device
            ports={this.state.networkSwitch.ports}
            selectedPort={this.state.selectedPort}
            onClick={this.handlePortSelect}
          />
        </div>
        <div className="subcontent">
          <PortInfo port={this.state.selectedPort} />
          <DeviceInfo />
        </div>
      </div>
    );
  }
}

export default Details;

/*
<div className="container mt-4">
  <div className="card-group">
    <div className="card">
      <div className="card-header">Connection</div>
      <div className="card-body">
        <div className="card-line">
          <span>Hostname:</span>
          <span className="font-weight-bold">
            {this.state.networkSwitch.name}
          </span>
        </div>
        <div className="card-line">
          <span>Domain:</span>
          <span className="text-muted">
            {this.state.networkSwitch.domain}
          </span>
        </div>
        <div className="card-line">
          <span>IP:</span>
          <span className="text-muted">
            {this.state.networkSwitch.ip}
          </span>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">Sync</div>
      <div className="card-body">
        <div className="card-line">
          <span className="font-weight-bold">Hostname:</span>
          <span>se2235sw01</span>
        </div>
        <div className="card-line">
          <span>Domain:</span>
          <span className="text-muted">clients.testdomain.se</span>
        </div>
        <div className="card-line">
          <span>IP:</span>
          <span className="text-muted">192.168.232.252</span>
        </div>
      </div>
    </div>
  </div>
  <div className="portWrap">
    <div className="portWrapInner">
      {this.state.networkSwitch.ports &&
        this.state.networkSwitch.ports.map((port) => (
          <SwitchPort key={port.id} />
        ))}
    </div>
  </div>
</div>
*/

/*
const SwitchDetails = (props) => {
  //var { networkSwitch } = props.location.props;
  console.log(this);

  //console.log(networkSwitch);
  return (
    <div className="container mt-4">
      <div className="card-group">
        <div className="card">
          <div className="card-header">Connection</div>
          <div className="card-body">
            <div className="card-line">
              <span>Hostname:</span>
              <span className="font-weight-bold">networkSwitch.name</span>
            </div>
            <div className="card-line">
              <span>Domain:</span>
              <span className="text-muted">networkSwitch.domain</span>
            </div>
            <div className="card-line">
              <span>IP:</span>
              <span className="text-muted">networkSwitch.ip</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Sync</div>
          <div className="card-body">
            <div className="card-line">
              <span className="font-weight-bold">Hostname:</span>
              <span>se2235sw01</span>
            </div>
            <div className="card-line">
              <span>Domain:</span>
              <span className="text-muted">clients.testdomain.se</span>
            </div>
            <div className="card-line">
              <span>IP:</span>
              <span className="text-muted">192.168.232.252</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchDetails;

        <div className="portWrap">
          <div className="portWrapInner">
            {this.state.networkSwitch.ports.map((port) => (
              <div className="dot" />
            ))}
          </div>
        </div>


*/
