import classNameProp from "class-name-prop";
import React from "react";

const Table = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("table", {
    className: classNameProp("daui-Table", className),
    ...props,
    ref,
  })
);

Table.displayName = "Table";

export default Table;
