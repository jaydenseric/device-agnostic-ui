// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/**
 * React component that displays children in a horizontally spaced and
 * scrollable grid.
 *
 * Integral to many device agnostic layouts.
 *
 * Best used as a block that occupies the entire viewport width:
 *
 * - More items will be visible in a narrow viewport.
 * - Users can interact with a larger area to scroll.
 * - Cropping items to a hole in the page doesn’t make skeuomorphic sense; it’s
 *   intuitive for items to scroll off the viewport.
 */
const Scroll = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"div">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { className, ...props },

    /** @type {React.ForwardedRef<HTMLDivElement>} */
    ref
  ) =>
    React.createElement("div", {
      className: classNameProp("daui-Scroll", className),
      ...props,
      ref,
    })
);

Scroll.displayName = "Scroll";

export default Scroll;
