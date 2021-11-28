"use strict";

const React = require("react");
const Icon = require("./Icon.js");

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

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  IconTick.displayName = "IconTick";

module.exports = IconTick;
