"use strict";

const classNameProp = require("class-name-prop");
const PropTypes = require("prop-types");
const React = require("react");

const VIEW_BOX_SIZE = 100;
const CIRCLE_STROKE_WIDTH = 12;

const circleRadius = VIEW_BOX_SIZE / 2 - CIRCLE_STROKE_WIDTH / 2;
const circleCircumference = Math.PI * circleRadius * 2;

const Loading = React.forwardRef(
  ({ size = "1em", title = "Loading", className, ...props }, ref) =>
    React.createElement(
      "svg",
      {
        className: classNameProp("daui-Loading", className),
        ...props,
        width: size,
        height: size,
        viewBox: `0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`,
        ref,
      },
      React.createElement("title", null, title),
      React.createElement("circle", {
        cx: "50%",
        cy: "50%",
        r: circleRadius,
        style: {
          "--daui-Loading-circle-stroke-width": `${CIRCLE_STROKE_WIDTH}px`,
          "--daui-Loading-circle-circumference": `${circleCircumference}px`,
        },
      })
    )
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Loading.displayName = "Loading";
  Loading.propTypes = {
    size: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
  };
}

module.exports = Loading;
