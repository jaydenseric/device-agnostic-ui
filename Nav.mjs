import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const Nav = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("nav", {
    className: classNameProp("daui-Nav", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Nav.displayName = "Nav";
  Nav.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default Nav;
