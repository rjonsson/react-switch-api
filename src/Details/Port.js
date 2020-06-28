import React from "react";

const Port = (props) => {
  return (
    <div>
      <img
        className="port"
        src="https://static.thenounproject.com/png/1057901-200.png"
        alt="P"
        onClick={() => props.onClick(props.port)}
      />
    </div>
  );
};

export default Port;
