import classNameProp from "class-name-prop";
import React from "react";

const Icon = React.forwardRef(
  ({ size = "1em", title, className, children, ...props }, ref) =>
    React.createElement(
      "svg",
      {
        className: classNameProp("daui-Icon", className),
        ...props,
        width: size,
        height: size,
        viewBox: "0 0 32 32",
        ref,
      },
      React.createElement("title", null, `${title} icon`),
      children
    )
);

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  Icon.displayName = "Icon";

export default Icon;
