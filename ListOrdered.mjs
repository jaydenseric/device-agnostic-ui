// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** CSS dependency URLs for the React component {@linkcode ListOrdered}. */
export const css = new Set([
  new URL("./ListOrdered.css", import.meta.url).href,
]);

/** React component for an {@link HTMLOListElement ordered list}. */
const ListOrdered = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"ol">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { className, ...props },

    /** @type {React.ForwardedRef<HTMLOListElement>} */
    ref
  ) =>
    React.createElement("ol", {
      className: classNameProp("daui-ListOrdered", className),
      ...props,
      ref,
    })
);

ListOrdered.displayName = "ListOrdered";

export default ListOrdered;
