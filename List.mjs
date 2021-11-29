import classNameProp from "class-name-prop";
import React from "react";

const List = React.forwardRef(({ ordered, className, ...props }, ref) =>
  React.createElement(ordered ? "ol" : "ul", {
    className: classNameProp("daui-List", className),
    ...props,
    ref,
  })
);

List.displayName = "List";

export default List;
