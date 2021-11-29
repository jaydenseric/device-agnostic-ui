import classNameProp from "class-name-prop";
import React from "react";
import LinkText from "./LinkText.mjs";

const Heading = React.forwardRef(
  ({ level = 1, size, id, className, style, children, ...props }, ref) =>
    React.createElement(
      `h${level}`,
      {
        className: classNameProp("daui-Heading", className),
        id,
        ...props,
        style: size
          ? {
              fontSize: `var(--daui-h${size}-font-size)`,
              ...style,
            }
          : style,
        ref,
      },
      id
        ? React.createElement(LinkText, { href: `#${id}` }, children)
        : children
    )
);

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  Heading.displayName = "Heading";

export default Heading;
