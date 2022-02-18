// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** React component for a {@link HTMLParagraphElement paragraph}. */
const Para = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"p">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { className, ...props },

    /** @type {React.ForwardedRef<HTMLParagraphElement>} */
    ref
  ) =>
    React.createElement("p", {
      className: classNameProp("daui-Para", className),
      ...props,
      ref,
    })
);

Para.displayName = "Para";

export default Para;
