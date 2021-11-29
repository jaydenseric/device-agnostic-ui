import classNameProp from "class-name-prop";
import React from "react";

const Scroll = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("div", {
    className: classNameProp("daui-Scroll", className),
    ...props,
    ref,
  })
);

Scroll.displayName = "Scroll";

export default Scroll;
