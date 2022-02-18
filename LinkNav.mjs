// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** @typedef {import("./Nav.mjs")["default"]} Nav */

/**
 * React component for a navigation {@link HTMLAnchorElement link}, for use
 * within the {@linkcode Nav} React component.
 */
const LinkNav = React.forwardRef(
  (
    /**
     * @type {LinkNavProps
     *   & React.ComponentPropsWithoutRef<"a">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { active, className, ...props },

    /** @type {React.ForwardedRef<HTMLAnchorElement>} */
    ref
  ) =>
    React.createElement("a", {
      className: classNameProp(
        "daui-LinkNav",
        active && "daui-LinkNav--active",
        className
      ),
      ...props,
      ref,
    })
);

LinkNav.displayName = "LinkNav";

export default LinkNav;

/**
 * Props for the {@linkcode LinkNav} React component, excluding additional
 * props for the {@linkcode HTMLAnchorElement}.
 * @typedef {object} LinkNavProps
 * @prop {boolean} [active] Does the link refer to the current page.
 */
