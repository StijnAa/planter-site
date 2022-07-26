import React, { useState, useReducer, useEffect, createContext } from "react";
import Dimentions from "./sections/Dimentions.component";

import {
  styles,
  fixtureMethodes,
  extras,
  plantingplans,
} from "../data/options";
import WoodChoise from "./sections/WoodChoise.component";
import Fixture from "./sections/Fixture.component";
// import PlantingPlan from "./sections/PlantingPlan.component";
// import Extras from "./sections/Extras.component";
// import Price from "./sections/Price.component";
import {
  DimentionCalculator,
  checkMinMax,
} from "../utils/DimentionCalculator";

const defaultState = {
  h: { value: 30, min: 16, max: 50 },
  w: { value: 100, min: 60, max: 200 },
  l: { value: 40, min: 40, max: 400 },
  plan: plantingplans[0],
  style: styles[0],
  fixtureMethode: fixtureMethodes[0],
};

export const AppContext = createContext([defaultState, () => defaultState]);

const reducer = (state, action) => {
  switch (action.type) {
    case "setH":
      return {
        ...state,
        h: {
          ...state.h,
          value: DimentionCalculator(
            state.style.plankHeight,
            action.payload.new,
            state.h
          ),
        },
      };
    case "addH":
      return {
        ...state,
        h: {
          ...state.h,
          value: DimentionCalculator(
            state.style.plankHeight,
            state.h.value,
            state.h,
            +1
          ),
        },
      };
    case "subtractH":
      return {
        ...state,
        h: {
          ...state.h,
          value: DimentionCalculator(
            state.style.plankHeight,
            state.h.value,
            state.h,
            -1
          ),
        },
      };
    case "setL":
      return {
        ...state,
        l: { ...state.l, value: checkMinMax(action.payload.new, state.l) },
      };
    case "addL":
      return {
        ...state,
        l: { ...state.l, value: checkMinMax(state.l.value + 1, state.l) },
      };
    case "subtractL":
      return {
        ...state,
        l: { ...state.l, value: checkMinMax(state.l.value - 1, state.l) },
      };
    case "setW":
      return {
        ...state,
        w: { ...state.w, value: checkMinMax(action.payload.new, state.w) },
      };
    case "addW":
      return {
        ...state,
        w: { ...state.w, value: checkMinMax(state.w.value + 1, state.w) },
      };
    case "subtractW":
      return {
        ...state,
        w: { ...state.w, value: checkMinMax(state.w.value - 1, state.w) },
      };
    case "changeWoodChoise":
      const newStyle = styles.find((item) => item["id"] === action.payload.id);
      const fixture = newStyle.fixtureMethodes.includes(state.fixtureMethode.id)
        ? state.fixtureMethode
        : fixtureMethodes.find(
            (item) => item["id"] === newStyle.fixtureMethodes[0]
          );
      const newValue = DimentionCalculator(
        newStyle.plankHeight,
        state.h.value,
        state.h
      );
      return {
        ...state,
        style: newStyle,
        fixtureMethode: fixture,
        h: { ...state.h, value: newValue },
      };
    case "changeFixtureChoise":
      return {
        ...state,
        fixtureMethode: fixtureMethodes.find(
          (item) => item["id"] === action.payload.id
        ),
      };
    default:
      return state;
  }
};

function PlanterBuilder() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className="m-16">
        <Dimentions />
        <WoodChoise />
        <Fixture />
      </div>
    </AppContext.Provider>
  );
}

export default PlanterBuilder;
