import classNameProp from "class-name-prop";
import React from "react";

const LinkText = React.forwardRef(({ active, className, ...props }, ref) =>
  React.createElement("a", {
    className: classNameProp(
      "daui-LinkText",
      active && "daui-LinkText--active",
      className
    ),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  LinkText.displayName = "LinkText";

export default LinkText;
