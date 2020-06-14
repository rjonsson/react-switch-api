import React from "react";

const SwitchAdd = (props) => {
  return (
    <React.Fragment>
      <tr>
        <th scope="col"></th>
        <th scope="col">
          <input
            className="m-0"
            type="text"
            onChange={(event) => props.onChange(event.target.value)}
          />
        </th>
        <th scope="col"></th>
        <th scope="col">
          <button
            className="btn btn-primary btn-sm m-0"
            onClick={() => props.onAdd()}
          >
            Add
          </button>
        </th>
        <th scope="col">
          <button
            className="btn btn-danger btn-sm m-0"
            onClick={() => props.onToggle()}
          >
            Cancel
          </button>
        </th>
      </tr>
    </React.Fragment>
  );
};

export default SwitchAdd;
