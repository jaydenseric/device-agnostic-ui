// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** React component for a text {@link HTMLAnchorElement link}. */
const LinkText = React.forwardRef(
  (
    /**
     * @type {LinkTextProps
     *   & React.ComponentPropsWithoutRef<"a">
     *   & import("./types.mjs").DataAttributes}
     */
    { active, className, ...props },

    /** @type {React.ForwardedRef<HTMLAnchorElement>} */
    ref
  ) =>
    React.createElement("a", {
      className: classNameProp(
        "daui-LinkText",
        active && "daui-LinkText--active",
        className
      ),
      ...props,
      ref,
    })
);

LinkText.displayName = "LinkText";

export default LinkText;

/**
 * Props for the {@linkcode LinkText} React component, excluding additional
 * props for the {@linkcode HTMLAnchorElement}.
 * @typedef {object} LinkTextProps
 * @prop {boolean} [active] Does the link refer to the current page.
 */
