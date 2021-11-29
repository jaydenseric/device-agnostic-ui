import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const Margin = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("div", {
    className: classNameProp("daui-Margin", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Margin.displayName = "Margin";
  Margin.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default Margin;
