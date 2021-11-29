import classNameProp from "class-name-prop";
import React from "react";

const List = React.forwardRef(({ ordered, className, ...props }, ref) =>
  React.createElement(ordered ? "ol" : "ul", {
    className: classNameProp("daui-List", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  List.displayName = "List";

export default List;
