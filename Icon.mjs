// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** React component for an inline SVG icon. */
const Icon = React.forwardRef(
  (
    /**
     * @type {IconProps
     *   & React.ComponentPropsWithoutRef<"svg">
     *   & import("./types.mjs").DataAttributes}
     */
    { size = "1em", title, className, children, ...props },

    /** @type {React.ForwardedRef<SVGElement>} */
    ref
  ) =>
    React.createElement(
      "svg",
      {
        className: classNameProp("daui-Icon", className),
        ...props,
        width: size,
        height: size,
        viewBox: "0 0 32 32",
        ref,
      },
      React.createElement("title", null, `${title} icon`),
      children
    )
);

Icon.displayName = "Icon";

export default Icon;

/**
 * Props for the {@linkcode Icon} React component, excluding additional props
 * for the {@linkcode SVGElement} container.
 * @typedef {object} IconProps
 * @prop {string} [size] {@link SVGElement SVG} width and height. Some browser
 *   versions don’t support `rem` units. Defaults to `"1em"`.
 * @prop {string} title Icon title.
 */
