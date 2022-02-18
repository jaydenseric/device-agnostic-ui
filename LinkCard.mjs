// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** React component for a card {@link HTMLAnchorElement link}. */
const LinkCard = React.forwardRef(
  (
    /**
     * @type {LinkCardProps
     *   & React.ComponentPropsWithoutRef<"a">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { active, className, ...props },

    /** @type {React.ForwardedRef<HTMLAnchorElement>} */
    ref
  ) =>
    React.createElement("a", {
      className: classNameProp(
        "daui-LinkCard",
        active && "daui-LinkCard--active",
        className
      ),
      ...props,
      ref,
    })
);

LinkCard.displayName = "LinkCard";

export default LinkCard;

/**
 * Props for the {@linkcode LinkCard} React component, excluding additional
 * props for the {@linkcode HTMLAnchorElement}.
 * @typedef {object} LinkCardProps
 * @prop {boolean} [active] Does the link refer to the current page.
 */
