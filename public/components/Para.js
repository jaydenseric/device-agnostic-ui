"use strict";

const classNameProp = require("class-name-prop");
const PropTypes = require("prop-types");
const React = require("react");
const propTypeChildren = require("../utils/propTypeChildren.js");

const Para = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("p", {
    className: classNameProp("daui-Para", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Para.displayName = "Para";
  Para.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Para;
