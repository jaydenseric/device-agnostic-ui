import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";

const Picture = React.forwardRef(
  ({ width, height, className, style, ...props }, ref) =>
    React.createElement("picture", {
      className: classNameProp("daui-Picture", className),
      ...props,
      style: {
        ...style,
        "--daui-Picture-width": width,
        "--daui-Picture-height": height,
      },
      ref,
    })
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Picture.displayName = "Picture";
  Picture.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    children: propTypeChildren.isRequired,
  };
}

export default Picture;
