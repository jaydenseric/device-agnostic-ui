import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const LinkCard = React.forwardRef(({ active, className, ...props }, ref) =>
  React.createElement("a", {
    className: classNameProp(
      "daui-LinkCard",
      active && "daui-LinkCard--active",
      className
    ),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  LinkCard.displayName = "LinkCard";
  LinkCard.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default LinkCard;
