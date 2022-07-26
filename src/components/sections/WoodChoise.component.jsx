import React, { useContext, useState, useEffect } from "react";
import Radio from "../modules/Radio.component";
import { styles } from "../../data/options";
import calculateWoodCostDif from "../../utils/costs/calculateWoodCost";
import { AppContext } from "../PlanterBuilder.component";

function WoodChoise() {
  const [state, dispatch] = useContext(AppContext);

  const [checked, setChecked] = useState(state.style.id);

  useEffect(() => {
    setChecked(state.style.id);
  }, [state.style.id]);

  const changeWoodChoise = (id) => {

    dispatch({ type: "changeWoodChoise", payload: { id: id } });
  };

  return (
    <div className="">
      <h1 className="text-lg underline">Houtsoort</h1>
      {styles.map((style) => (
                <div className="bg-gray-300 flex mt-2 h-16">
          <Radio
            key={style.id}
            id={style.id}
            label={style.woodname}
            name="styleNumber"
            handleChange={changeWoodChoise}
            checked={checked === style.id ? true : false}
          />
          <div clasName="mb-2" key={"price" + style.id} >
           €  {calculateWoodCostDif(state, style).toFixed(2)}

          </div>
        </div>
      ))}
    </div>
  );
}

export default WoodChoise;
