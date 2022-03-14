// @ts-check

import React from "react";

import Icon, { css as cssIcon } from "./Icon.mjs";

/** CSS dependency URLs for the React component {@linkcode IconTick}. */
export const css = new Set([...cssIcon]);

/** React component for an inline SVG icon of a tick. */
const IconTick = React.forwardRef(
  (
    /**
     * @type {Omit<import("./Icon.mjs").IconProps, "title">
     *   & Omit<React.ComponentPropsWithoutRef<"svg">, "children">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    props,

    /** @type {React.ForwardedRef<SVGElement>} */
    ref
  ) =>
    React.createElement(
      Icon,
      {
        title: "Tick",
        ...props,
        ref,
      },
      React.createElement("polyline", {
        points: "2,15 13,28 29,4",
        strokeWidth: "6",
        strokeLinejoin: "round",
        fill: "none",
      })
    )
);

IconTick.displayName = "IconTick";

export default IconTick;
