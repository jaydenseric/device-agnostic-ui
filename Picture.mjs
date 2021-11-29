import classNameProp from "class-name-prop";
import React from "react";

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

Picture.displayName = "Picture";

export default Picture;
