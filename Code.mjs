import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const Code = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("code", {
    className: classNameProp("daui-Code", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Code.displayName = "Code";
  Code.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default Code;
