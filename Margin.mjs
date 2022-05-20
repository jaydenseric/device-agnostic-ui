// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** CSS dependency URLs for the React component {@linkcode Margin}. */
export const css = new Set([new URL("./Margin.css", import.meta.url).href]);

/** React component for surrounding content with a margin. */
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
