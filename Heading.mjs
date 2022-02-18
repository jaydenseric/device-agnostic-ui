// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

import LinkText from "./LinkText.mjs";

// Todo: The `level` prop should determine the types for other props, although
// all levels probably have the same props.

/** React component for a {@link HTMLHeadingElement heading}. */
const Heading = React.forwardRef(
  (
    /**
     * @type {HeadingProps
     *   & React.ComponentPropsWithoutRef<"h1">
     *   & React.ComponentPropsWithoutRef<"h2">
     *   & React.ComponentPropsWithoutRef<"h3">
     *   & React.ComponentPropsWithoutRef<"h4">
     *   & React.ComponentPropsWithoutRef<"h5">
     *   & React.ComponentPropsWithoutRef<"h6">
     *   & import("./types.mjs").DataAttributes}
     */
    { level = 1, size, id, className, style, children, ...props },

    /** @type {React.ForwardedRef<HTMLHeadingElement>} */
    ref
  ) =>
    React.createElement(
      `h${level}`,
      {
        className: classNameProp("daui-Heading", className),
        id,
        ...props,
        style: size
          ? {
              fontSize: `var(--daui-h${size}-font-size)`,
              ...style,
            }
          : style,
        ref,
      },
      id
        ? React.createElement(LinkText, { href: `#${id}` }, children)
        : children
    )
);

Heading.displayName = "Heading";

export default Heading;

/**
 * Props for the {@linkcode Heading} React component, excluding additional props
 * for the {@linkcode HTMLHeadingElement} container.
 * @typedef {object} HeadingProps
 * @prop {1 | 2 | 3 | 4 | 5 | 6} [level] Determines the
 *   {@link HTMLHeadingElement heading element} level. Defaults to `1`.
 * @prop {1 | 2 | 3 | 4 | 5 | 6} [size] Sets the CSS `font-size` via a global
 *   theme CSS variable, e.g. `--daui-h1-font-size`. Omit if setting a custom
 *   CSS `font-size`.
 * @prop {string} [id] Sets an `id` attribute on the heading element and nests
 *   children in a {@linkcode LinkText} component that links to it.
 */
