import React from "react";

function Radio(props) {
  return (
    <div >
      <input
        className="my-auto mx-7"
        type="radio"
        checked={props.checked}
        onChange={() => {
          props.handleChange(Number(props.id));
        }}
        label={props.label}
        name={props.name}
      />
      <div className="">
        <label clasName="mt-2" htmlFor={props.label}>
          {props.label}
        </label>
      </div>
    </div>
  );
}

export default Radio;
