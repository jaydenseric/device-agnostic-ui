"use strict";

const classNameProp = require("class-name-prop");
const PropTypes = require("prop-types");
const React = require("react");
const propTypeChildren = require("../utils/propTypeChildren.js");

const Button = React.forwardRef(({ disabled, className, ...props }, ref) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return React.createElement("button", {
    className: classNameProp("daui-Button", className),
    disabled: disabled || !isMounted,
    ...props,
    ref,
  });
});

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Button.displayName = "Button";
  Button.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Button;
