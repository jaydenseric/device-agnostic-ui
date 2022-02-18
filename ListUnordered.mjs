// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** React component for an {@link HTMLUListElement unordered list}. */
const ListUnordered = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"ul">
     *   & import("./types.mjs").DataAttributes}
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
