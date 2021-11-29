import classNameProp from "class-name-prop";
import React from "react";

const Html = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("div", {
    className: classNameProp("daui-Html", className),
    ...props,
    ref,
  })
);

Html.displayName = "Html";

export default Html;
