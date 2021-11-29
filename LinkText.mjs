import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const LinkText = React.forwardRef(({ active, className, ...props }, ref) =>
  React.createElement("a", {
    className: classNameProp(
      "daui-LinkText",
      active && "daui-LinkText--active",
      className
    ),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  LinkText.displayName = "LinkText";
  LinkText.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default LinkText;
