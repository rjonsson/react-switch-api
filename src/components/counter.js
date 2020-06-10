import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
    switches: [
      { id: 0, name: "se2961sw01", domain: "skanska.net", ip: "10.37.41.23" },
      { id: 1, name: "se2961sw02", domain: "skanska.net", ip: "10.37.41.24" },
    ],
    imageUrl: "http://picsum.photos/200",
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Hostname</th>
            <th scope="col">Domain</th>
            <th scope="col">IP</th>
          </tr>
        </thead>
        <tbody>
          {this.state.switches.map((netswitch) => (
            <th scope="row">{netswitch.id}</th>
          ))}
        </tbody>
      </table>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count;
  }
}

export default Counter;
