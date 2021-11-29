import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const Pre = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("pre", {
    className: classNameProp("daui-Pre", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Pre.displayName = "Pre";
  Pre.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default Pre;
