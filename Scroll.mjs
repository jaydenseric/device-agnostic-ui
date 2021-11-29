import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";

const Scroll = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement("div", {
    className: classNameProp("daui-Scroll", className),
    ...props,
    ref,
  })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Scroll.displayName = "Scroll";
  Scroll.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
}

export default Scroll;
