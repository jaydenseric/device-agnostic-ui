import classNameProp from "class-name-prop";
import React from "react";

const Pre = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("pre", {
    className: classNameProp("daui-Pre", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  Pre.displayName = "Pre";

export default Pre;
