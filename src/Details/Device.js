import React from "react";
import Port from "./Port";

const Device = (props) => {
  return (
    <div className="devicewrapper">
      <div className="device">
        {props.ports &&
          props.ports.map((port) => (
            <Port port={port} key={port.id} onClick={props.onClick} />
          ))}
      </div>
    </div>
  );
};

export default Device;

/*

*/
