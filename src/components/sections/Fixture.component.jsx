import React, { useContext, useState, useEffect } from "react";

import Radio from "../modules/Radio.component";
import { fixtureMethodes } from "../../data/options";
import calculateFixtureCostDif from "../../utils/costs/calculateFixtureCost";
import { AppContext } from "../PlanterBuilder.component";

function Fixture() {
  const [state, dispatch] = useContext(AppContext);

  const [checked, setChecked] = useState(state.fixtureMethode.id);

  const changeFixtureChoise = (id) => {
    dispatch({ type: "changeFixtureChoise", payload: { id: id } });
  };

  const availableFixtures = fixtureMethodes.filter((item) => {
    return state.style.fixtureMethodes.includes(item.id);
  });

  useEffect(() => {
    setChecked(state.fixtureMethode.id);
  }, [state.fixtureMethode.id]);

  return (
    <div>
      <h1 className="text-lg underline">Bevestigings Methode</h1>
      {availableFixtures.map((fixtureMethode) => (
        <div className="bg-gray-300 flex mt-2 h-16">
          <Radio
            key={fixtureMethode.id}
            id={fixtureMethode.id}
            label={fixtureMethode.name}
            name="fixture"
            handleChange={changeFixtureChoise}
            checked={checked === fixtureMethode.id ? true : false}
          />
          <div clasName="mb-2" key={"price" + fixtureMethode.id} className="opacity-0 hover:opacity-100">
            € {calculateFixtureCostDif(state, fixtureMethode).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fixture;
