import classNameProp from "class-name-prop";
import React from "react";

const Blockquote = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("blockquote", {
    className: classNameProp("daui-Blockquote", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  Blockquote.displayName = "Blockquote";

export default Blockquote;
