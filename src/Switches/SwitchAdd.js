import React from "react";

const SwitchAdd = (props) => {
  return (
    <React.Fragment>
      <tr>
        <th scope="row"></th>
        <td>
          <div className="col">
            <div className="row justify-content-center m-2">
              <input
                className="table-input"
                type="text"
                onChange={(event) => props.onChange(event.target.value)}
              />
            </div>
            <div className="row justify-content-center">
              <button
                className="btn btn-primary btn-sm m-1"
                onClick={() => props.onAdd()}
              >
                Add
              </button>
              <button
                className="btn btn-danger btn-sm m-1"
                onClick={() => props.onToggle()}
              >
                Cancel
              </button>
            </div>
          </div>
        </td>
        <td colspan="3"></td>
      </tr>
    </React.Fragment>
  );
};

export default SwitchAdd;
