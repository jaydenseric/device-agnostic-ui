import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const Blockquote = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("blockquote", {
    className: classNameProp("daui-Blockquote", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Blockquote.displayName = "Blockquote";
  Blockquote.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default Blockquote;
