import classNameProp from "class-name-prop";
import React from "react";

const LinkCard = React.forwardRef(({ active, className, ...props }, ref) =>
  React.createElement("a", {
    className: classNameProp(
      "daui-LinkCard",
      active && "daui-LinkCard--active",
      className
    ),
    ...props,
    ref,
  })
);

LinkCard.displayName = "LinkCard";

export default LinkCard;