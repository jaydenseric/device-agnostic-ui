// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** CSS dependency URLs for the React component {@linkcode Blockquote}. */
export const css = new Set([new URL("./Blockquote.css", import.meta.url).href]);

/** React component for a {@link HTMLQuoteElement blockquote}. */
const Blockquote = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"blockquote">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { className, ...props },

    /** @type {React.ForwardedRef<HTMLQuoteElement>} */
    ref
  ) =>
    React.createElement("blockquote", {
      className: classNameProp("daui-Blockquote", className),
      ...props,
      ref,
    })
);

Blockquote.displayName = "Blockquote";

export default Blockquote;
