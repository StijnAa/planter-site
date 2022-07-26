import React from "react";

function Checkbox(props) {
  return (
    <>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.handleChange(props.id)}
        label={props.label}
        name={props.name}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </>
  );
}

export default Checkbox;
