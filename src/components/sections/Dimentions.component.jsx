import React, { useContext } from "react";
import NumberField from "../modules/NumberField.component";
import { AppContext } from "../PlanterBuilder.component";
import Slider from "../modules/Slider.component";

function Dimentions() {
  const [state, dispatch] = useContext(AppContext);

  const setH = (value) => {
    dispatch({ type: "setH", payload: { new: value } });
  };
  const setL = (value) => {
    dispatch({ type: "setL", payload: { new: value } });
  };
  const setW = (value) => {
    dispatch({ type: "setW", payload: { new: value } });
  };
  const addH = () => {
    dispatch({ type: "addH" });
  };
  const subtractH = () => {
    dispatch({ type: "subtractH" });
  };
  const addL = () => {
    dispatch({ type: "addL" });
  };
  const subtractL = () => {
    dispatch({ type: "subtractL" });
  };
  const addW = () => {
    dispatch({ type: "addW" });
  };
  const subtractW = () => {
    dispatch({ type: "subtractW" });
  };

  return (
    <div>
      <h1 className="text-lg underline">Maaten</h1>

      <div className="mb-10">
        <Slider
          label="Lengte"
          formatOptions={{}}
          minValue={state.l.min}
          maxValue={state.l.max}
          step={1}
          start={state.l.value}
          onChangeEnd={(e) => {
            setL(e[0]);
          }}
        >
          <button
            style={{ order: 2, color: "white", padding: "0 12px" }}
            onClick={addL}
          >
            +
          </button>
          <button
            style={{ order: 0, color: "white", padding: "0 12px" }}
            onClick={subtractL}
          >
            -
          </button>
        </Slider>
      </div>

      <div className="mb-10">
        <Slider
          label="Breedte"
          formatOptions={{}}
          minValue={state.w.min}
          maxValue={state.w.max}
          step={1}
          start={state.w.value}
          onChangeEnd={(e) => {
            setW(e[0]);
          }}
        >
          <button
            style={{ order: 2, color: "white", padding: "0 12px" }}
            onClick={addW}
          >
            +
          </button>
          <button
            style={{ order: 0, color: "white", padding: "0 12px" }}
            onClick={subtractW}
          >
            -
          </button>
        </Slider>
      </div>
      <div className="mb-10">
        <Slider
          label="Hoogte"
          formatOptions={{}}
          minValue={
            Math.round(state.h.min / state.style.plankHeight) *
            state.style.plankHeight
          }
          maxValue={
            Math.round(state.h.max / state.style.plankHeight) *
            state.style.plankHeight
          }
          step={state.style.plankHeight}
          start={state.h.value}
          onChangeEnd={(e) => {
            setH(e[0]);
          }}
        >
          <button
            style={{ order: 2, color: "white", padding: "0 12px" }}
            onClick={addH}
          >
            +
          </button>
          <button
            style={{ order: 0, color: "white", padding: "0 12px" }}
            onClick={subtractH}
          >
            -
          </button>
        </Slider>
      </div>
    </div>
  );
}

export default Dimentions;
