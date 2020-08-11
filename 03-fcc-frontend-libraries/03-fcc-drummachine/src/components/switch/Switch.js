import React from "react";

const Switch = ({ onChange }) => {
  return (
    <label style={{ position: "absolute", left: "20%", top: "500px" }}>
      <input type="checkbox" onChange={onChange} />
      <span></span>
    </label>
  );
};

export default Switch;
