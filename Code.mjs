import classNameProp from "class-name-prop";
import React from "react";

const Code = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("code", {
    className: classNameProp("daui-Code", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  Code.displayName = "Code";

export default Code;
