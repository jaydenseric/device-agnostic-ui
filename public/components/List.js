"use strict";

const classNameProp = require("class-name-prop");
const PropTypes = require("prop-types");
const React = require("react");
const propTypeChildren = require("../utils/propTypeChildren.js");

const List = React.forwardRef(({ ordered, className, ...props }, ref) =>
  React.createElement(ordered ? "ol" : "ul", {
    className: classNameProp("daui-List", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  List.displayName = "List";
  List.propTypes = {
    ordered: PropTypes.bool,
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = List;
