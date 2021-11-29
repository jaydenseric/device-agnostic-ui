import classNameProp from "class-name-prop";
import React from "react";

const LinkNav = React.forwardRef(({ active, className, ...props }, ref) =>
  React.createElement("a", {
    className: classNameProp(
      "daui-LinkNav",
      active && "daui-LinkNav--active",
      className
    ),
    ...props,
    ref,
  })
);

LinkNav.displayName = "LinkNav";

export default LinkNav;
