import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const LinkNav = React.forwardRef(({ active, className, ...props }, ref) =>
  React.createElement("a", {
    className: classNameProp(
      "daui-LinkNav",
      active && "daui-LinkNav--active",
      className
    ),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  LinkNav.displayName = "LinkNav";
  LinkNav.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default LinkNav;
