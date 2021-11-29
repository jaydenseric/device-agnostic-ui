import classNameProp from "class-name-prop";
import React from "react";

const Table = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("table", {
    className: classNameProp("daui-Table", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  Table.displayName = "Table";

export default Table;
