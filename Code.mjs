// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** React component for inline code. */
const Code = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"code">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { className, ...props },

    /** @type {React.ForwardedRef<HTMLElement>} */
    ref
  ) =>
    React.createElement("code", {
      className: classNameProp("daui-Code", className),
      ...props,
      ref,
    })
);

Code.displayName = "Code";

export default Code;
