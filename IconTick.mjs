import React from "react";
import Icon from "./Icon.mjs";

const IconTick = React.forwardRef((props, ref) =>
  React.createElement(
    Icon,
    {
      title: "Tick",
      ...props,
      ref,
    },
    React.createElement("polyline", {
      points: "2,15 13,28 29,4",
      strokeWidth: "6",
      strokeLinejoin: "round",
      fill: "none",
    })
  )
);

IconTick.displayName = "IconTick";

export default IconTick;
