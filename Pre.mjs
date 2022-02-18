// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** React component for {@link HTMLPreElement preformatted text}. */
const Pre = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"pre">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { className, ...props },

    /** @type {React.ForwardedRef<HTMLPreElement>} */
    ref
  ) =>
    React.createElement("pre", {
      className: classNameProp("daui-Pre", className),
      ...props,
      ref,
    })
);

Pre.displayName = "Pre";

export default Pre;
