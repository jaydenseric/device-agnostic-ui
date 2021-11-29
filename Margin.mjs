import classNameProp from "class-name-prop";
import React from "react";

const Margin = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("div", {
    className: classNameProp("daui-Margin", className),
    ...props,
    ref,
  })
);

Margin.displayName = "Margin";

export default Margin;
