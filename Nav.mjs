// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** @typedef {import("./LinkNav.mjs")["default"]} LinkNav */

/** CSS dependency URLs for the React component {@linkcode Nav}. */
export const css = new Set([new URL("./Nav.css", import.meta.url).href]);

/**
 * React component for a {@link HTMLElement nav} containing
 * {@link LinkNav navigation links}.
 */
const Nav = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"nav">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { className, ...props },

    /** @type {React.ForwardedRef<HTMLElement>} */
    ref
  ) =>
    React.createElement("nav", {
      className: classNameProp("daui-Nav", className),
      ...props,
      ref,
    })
);

Nav.displayName = "Nav";

export default Nav;
