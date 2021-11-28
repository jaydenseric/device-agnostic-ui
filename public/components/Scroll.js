"use strict";

const classNameProp = require("class-name-prop");
const PropTypes = require("prop-types");
const React = require("react");

const Scroll = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("div", {
    className: classNameProp("daui-Scroll", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Scroll.displayName = "Scroll";
  Scroll.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
}

module.exports = Scroll;
