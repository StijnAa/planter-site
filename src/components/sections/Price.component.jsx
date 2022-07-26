import React from "react";
import calculateWoodCost from "../../utils/costs/calculateWoodCost";
import calculateFixtureCost from "../../utils/costs/calculateFixtureCost";
import calculatePlantingPlanCost from "../../utils/costs/calculatePlantingPlanCost";
import { extras } from "../../data/options";

function Price({ state }) {
  const woodCost = calculateWoodCost(
    state.height,
    state.width,
    state.length,
    state.style.plankHeight,
    state.style.price
  );
  const fixtureCost = calculateFixtureCost(
    state.height,
    state.width,
    state.length,
    state.style.plankHeight,
    state.fixture.price
  );
  const plantingPlanCost = calculatePlantingPlanCost(
    state.width,
    state.length,
    state.plantingplan.price
  );

  let extrasCost = 0;
  extras.forEach((extra) => {
    extrasCost = state[extra.name] ? extrasCost + extra.price : extrasCost;
  });

  const total = woodCost + fixtureCost + plantingPlanCost + extrasCost;

  return (
    <div className="float-right sticky top-0 bg-white p-2">
      <h1 className="font-bold text-xl">Price:€ {total.toFixed(2)}</h1>
      <p>WoodCost: {woodCost.toFixed(2)}</p>
      <p>Fixture: {fixtureCost.toFixed(2)}</p>
      <p>plantingPlan: {plantingPlanCost.toFixed(2)}</p>
      <p>Extras: {extrasCost.toFixed(2)}</p>
    </div>
  );
}

export default Price;
