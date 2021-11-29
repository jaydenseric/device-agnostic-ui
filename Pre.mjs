import classNameProp from "class-name-prop";
import React from "react";

const Pre = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("pre", {
    className: classNameProp("daui-Pre", className),
    ...props,
    ref,
  })
);

Pre.displayName = "Pre";

export default Pre;
