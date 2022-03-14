// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** CSS dependency URLs for the React component {@linkcode ListUnordered}. */
export const css = new Set([
  new URL("./ListUnordered.css", import.meta.url).href,
]);

/** React component for an {@link HTMLUListElement unordered list}. */
const ListUnordered = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"ul">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { className, ...props },

    /** @type {React.ForwardedRef<HTMLUListElement>} */
    ref
  ) =>
    React.createElement("ul", {
      className: classNameProp("daui-ListUnordered", className),
      ...props,
      ref,
    })
);

ListUnordered.displayName = "ListUnordered";

export default ListUnordered;
