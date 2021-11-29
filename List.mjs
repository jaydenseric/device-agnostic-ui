import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

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

export default List;
