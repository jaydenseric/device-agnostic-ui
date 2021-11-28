"use strict";

const classNameProp = require("class-name-prop");
const PropTypes = require("prop-types");
const React = require("react");
const LinkText = require("./LinkText.js");

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

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Heading.displayName = "Heading";
  Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
  };
}

module.exports = Heading;
