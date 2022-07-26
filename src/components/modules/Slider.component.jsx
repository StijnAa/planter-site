import React, { useEffect, useContext } from "react";
import { AppContext } from "../PlanterBuilder.component";

import { useSlider, useSliderThumb } from "@react-aria/slider";
import { useSliderState } from "@react-stately/slider";
import { useFocusRing } from "@react-aria/focus";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { mergeProps } from "@react-aria/utils";
import { useNumberFormatter } from "@react-aria/i18n";

const Slider = (props) => {
  let trackRef = React.useRef(null);
  let numberFormatter = useNumberFormatter(props.formatOptions);
  let state = useSliderState({ ...props, numberFormatter });
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );

  return (
    <div
      {...groupProps}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 300,
        touchAction: "none",
      }}
    >
      {/* Create a flex container for the label and output element. */}
      <div style={{ display: "flex", alignSelf: "stretch" }}>
        {props.label && <label {...labelProps}>{props.label}</label>}

      </div>
      {/* The track element holds the visible track line and the thumb. */}
      <div
        {...trackProps}
        ref={trackRef}
        style={{
          position: "relative",
          height: 30,
          width: " 100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "gray",
            height: 3,
            top: 13,
            width: "100%",
          }}
        />
        <Thumb index={0} state={state} trackRef={trackRef} {...props} {...outputProps} />
      </div>
    </div>
  );
};

function Thumb(props) {
  const [stateFromContext] = useContext(AppContext);
  let { state, trackRef, index } = props;
  let inputRef = React.useRef(null);
  let { thumbProps, inputProps } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state
  );
  useEffect(() => {
    state.setThumbValue(index, props.start);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[stateFromContext]);

  let { focusProps, isFocusVisible } = useFocusRing();
  return (
    <div
      style={{
        position: "absolute",
        top: 4,
        transform: "translateX(-50%)",
        left: `${state.getThumbPercent(index) * 100}%`,
      }}
    >
      <div
        {...thumbProps}
        style={{
          display: "flex",

          width: 122,
          height: 24,
          textAlign:"center",
          backgroundColor: isFocusVisible
            ? "orange"
            : state.isThumbDragging(index)
            ? "dimgrey"
            : "black",
        }}
      >
                <output {...props.outputProps} style={{ flex: "1 0 auto", textAlign: "end", color: "white", fontWeight: "bold", width: "22px", order: "2", }}>
          {state.getThumbValueLabel(0)} cm 
        </output>
         {props.children}
        <VisuallyHidden>
          <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
        </VisuallyHidden>
      </div>
    </div>
  );
}

export default Slider;
