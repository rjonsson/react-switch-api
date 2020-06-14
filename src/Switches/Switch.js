import React from "react";

const Switch = (props) => {
  return (
    <React.Fragment>
      <tr>
        <th scope="col">{props.networkSwitch.id}</th>
        <th scope="col">
          {props.networkSwitch.name}.{props.networkSwitch.domain}
        </th>
        <th scope="col">{props.networkSwitch.ip}</th>
        <th scope="col">{props.networkSwitch.ports.length}</th>
        <th scope="col">
          <button
            onClick={() => props.onDelete(props.networkSwitch.id)}
            type="button"
            className="btn btn-danger"
          />
        </th>
      </tr>
    </React.Fragment>
  );
};

export default Switch;
