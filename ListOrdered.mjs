// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** React component for an {@link HTMLOListElement ordered list}. */
const ListOrdered = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"ol">
     *   & import("./types.mjs").DataAttributes}
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
