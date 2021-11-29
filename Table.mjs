import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const Table = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("table", {
    className: classNameProp("daui-Table", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Table.displayName = "Table";
  Table.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default Table;
