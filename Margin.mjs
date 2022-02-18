// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

const Margin = React.forwardRef(
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
      className: classNameProp("daui-Margin", className),
      ...props,
      ref,
    })
);

Margin.displayName = "Margin";

export default Margin;
