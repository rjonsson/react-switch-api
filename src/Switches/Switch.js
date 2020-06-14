import React from "react";

const Switch = (props) => {
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{props.networkSwitch.id}</th>
        <td>
          {props.networkSwitch.name}.{props.networkSwitch.domain}
        </td>
        <td>{props.networkSwitch.ip}</td>
        <td>{props.networkSwitch.ports.length}</td>
        <td>
          <button
            onClick={() => props.onDelete(props.networkSwitch.id)}
            type="button"
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Switch;
