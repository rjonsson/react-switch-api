import React from "react";
import { Link } from "react-router-dom";

const SwitchRow = (props) => {
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{props.networkSwitch.id}</th>
        <td>
          <Link to={`/Details/${props.networkSwitch.id}`}>
            {props.networkSwitch.name}.{props.networkSwitch.domain}
          </Link>
        </td>
        <td>{props.networkSwitch.ip}</td>
        <td>{props.networkSwitch.ports.length}</td>
        <td>Unknown</td>
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

export default SwitchRow;
