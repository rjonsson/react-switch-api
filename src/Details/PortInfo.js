import React, { useState } from "react";

const PortInfo = (props) => {
  const [vlan, setVlan] = useState("cphora");

  const PortMode = {
    0: "Access",
    1: "Trunk",
  };

  return (
    <div>
      {props.port && (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{props.port.name}</td>
            </tr>
            <tr>
              <th>Mode</th>
              <td>{PortMode[props.port.mode]}</td>
            </tr>
            {!props.port.mode && (
              <tr>
                <th>VLAN</th>
                <td>
                  <select
                    value={props.port.vlans[0].vlanId}
                    onChange={() => setVlan("hejsan")}
                  >
                    <option value="Orange">Orange</option>
                    <option value="Radish">Radish</option>
                    <option value={props.port.vlans[0].vlanId}>
                      {props.port.vlans[0].vlanId}
                    </option>
                  </select>
                </td>
              </tr>
            )}
            <tr>
              <td>
                <button onClick={() => setVlan("cphora2")} />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PortInfo;
