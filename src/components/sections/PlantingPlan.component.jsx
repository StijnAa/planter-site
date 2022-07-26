import React from "react";
import Radio from "../modules/Radio.component";
import { plantingplans } from "../../data/options";

function Plantingplan(props) {
  const handleChange = (id) => {
    set(id, plantingplans, "plantingplan");
  };

  const set = (id, array, stateKey) => {
    const selected = array.find((item) => item["id"] === id);
    props.setState({ ...props.state, [stateKey]: selected });
  };

  return (
    <div>
      <h1 className="text-lg underline">Beplantings plan</h1>
      {plantingplans.map((plan) => (
        <Radio
          key={plan.id}
          id={plan.id}
          label={plan.name}
          name="plans"
          handleChange={handleChange}
          checked={props.state.plantingplan.id === plan.id ? true : false}
        />
      ))}
    </div>
  );
}

export default Plantingplan;
