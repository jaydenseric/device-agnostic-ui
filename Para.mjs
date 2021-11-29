import classNameProp from "class-name-prop";
import React from "react";

const Para = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("p", {
    className: classNameProp("daui-Para", className),
    ...props,
    ref,
  })
);

Para.displayName = "Para";

export default Para;
