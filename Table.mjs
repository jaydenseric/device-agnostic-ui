// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** React component for a {@link HTMLTableElement table}. */
const Table = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"table">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { className, ...props },

    /** @type {React.ForwardedRef<HTMLTableElement>} */
    ref
  ) =>
    React.createElement("table", {
      className: classNameProp("daui-Table", className),
      ...props,
      ref,
    })
);

Table.displayName = "Table";

export default Table;
