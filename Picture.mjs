// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/**
 * React component for a {@link HTMLPictureElement picture} with a responsive
 * width and proportionate height, even while loading.
 *
 * It’s displayed as a block and tends to take up 100% of the available space
 * unless an inline style `width` is set.
 */
const Picture = React.forwardRef(
  (
    /**
     * @type {PictureProps
     *   & React.ComponentPropsWithoutRef<"picture">
     *   & import("./types.mjs").DataAttributes}
     */
    { width, height, className, style, ...props },

    /** @type {React.ForwardedRef<HTMLPictureElement>} */
    ref
  ) =>
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

/**
 * Props for the {@linkcode Picture} React component, excluding additional props
 * for the {@linkcode HTMLPictureElement} container.
 * @typedef {object} PictureProps
 * @prop {number} width The picture’s ratio width; typically it’s intrinsic
 *   pixel width.
 * @prop {number} height The picture’s ratio height; typically it’s intrinsic
 *   pixel height.
 */
