import classNameProp from "class-name-prop";
import React from "react";

const Nav = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("nav", {
    className: classNameProp("daui-Nav", className),
    ...props,
    ref,
  })
);

Nav.displayName = "Nav";

export default Nav;
