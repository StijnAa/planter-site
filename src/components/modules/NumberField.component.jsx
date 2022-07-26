import React, { useEffect, useState } from "react";

function NumberField(props) {
  const [state, setState] = useState(props.value);

  useEffect(() => {
    setState(props.value);
  }, [props.value]);

  return (
    <div className="flex md:items-center mb-6">
      <label className="" htmlFor={props.label}>
        {props.label}
      </label>
      <input
        className="w-28 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={state}
        onChange={(e) => {
          setState(Number(e.target.value));
        }}
        onBlur={(e) => props.handleBlur(Number(e.target.value))}
        label={props.label}
        name={props.name}
      />
      <label className="">cm</label>
    </div>
  );
}

export default NumberField;
