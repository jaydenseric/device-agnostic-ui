// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/**
 * React component for a {@link HTMLButtonElement button}.
 *
 * It automatically has the
 * [`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-disabled)
 * attribute until mounted, to prevent a default action from happening if the
 * user clicks quickly after SSR.
 *
 * For an on-page interaction, typically in a form.
 *
 * Links are semantically different and have separate, distinctly styled
 * components.
 */
const Button = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"button">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { disabled, className, ...props },

    /** @type {React.ForwardedRef<HTMLButtonElement>} */
    ref
  ) => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
      setIsMounted(true);
    }, []);

    return React.createElement("button", {
      className: classNameProp("daui-Button", className),
      disabled: disabled || !isMounted,
      ...props,
      ref,
    });
  }
);

Button.displayName = "Button";

export default Button;
