import React from "react";
import Checkbox from "../modules/Checkbox.component";
import { extras } from "../../data/options";

function Extras(props) {
  const handleChange = (id) => {
    set(id, extras);
  };

  const set = (id, array) => {
    const selected = array.find((item) => item["id"] === id);
    props.setState({
      ...props.state,
      [selected.name]: !props.state[selected.name],
    });
  };

  return (
    <div>
      <h1 className="text-lg underline">Extras</h1>
      {extras.map((extra) => (
        <Checkbox
          key={extra.id}
          id={extra.id}
          label={extra.name}
          name={extra.name}
          handleChange={handleChange}
          checked={props.state[extra.name]}
        />
      ))}
    </div>
  );
}

export default Extras;
