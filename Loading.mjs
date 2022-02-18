// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

const VIEW_BOX_SIZE = 100;
const CIRCLE_STROKE_WIDTH = 12;

const circleRadius = VIEW_BOX_SIZE / 2 - CIRCLE_STROKE_WIDTH / 2;
const circleCircumference = Math.PI * circleRadius * 2;

/** React component for an animated loading icon. */
const Loading = React.forwardRef(
  (
    /**
     * @type {LoadingProps
     *   & Omit<React.ComponentPropsWithoutRef<"svg">, "children">
     *   & import("./types.mjs").DataAttributes}
     */
    { size = "1em", title = "Loading", className, ...props },

    /** @type {React.ForwardedRef<SVGElement>} */
    ref
  ) =>
    React.createElement(
      "svg",
      {
        className: classNameProp("daui-Loading", className),
        ...props,
        width: size,
        height: size,
        viewBox: `0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`,
        ref,
      },
      React.createElement("title", null, title),
      React.createElement("circle", {
        cx: "50%",
        cy: "50%",
        r: circleRadius,
        style: {
          "--daui-Loading-circle-stroke-width": `${CIRCLE_STROKE_WIDTH}px`,
          "--daui-Loading-circle-circumference": `${circleCircumference}px`,
        },
      })
    )
);

Loading.displayName = "Loading";

export default Loading;

/**
 * Props for the {@linkcode Loading} React component, excluding additional props
 * for the {@linkcode SVGElement} container.
 * @typedef {object} LoadingProps
 * @prop {string} [size] {@link SVGElement SVG} width and height. Some browser
 *   versions don’t support `rem` units. Defaults to `"1em"`.
 * @prop {string} [title] Loading title. Defaults to `"Loading"`.
 */
