import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const Html = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("div", {
    className: classNameProp("daui-Html", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Html.displayName = "Html";
  Html.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default Html;
