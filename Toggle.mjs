// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

import IconTick, { css as cssIconTick } from "./IconTick.mjs";
import useCustomValidity from "./useCustomValidity.mjs";
import useMergedRef from "./useMergedRef.mjs";
import useOnFocusReportValidity from "./useOnFocusReportValidity.mjs";

/** CSS dependency URLs for the React component {@linkcode Toggle}. */
export const css = new Set([
  ...cssIconTick,
  new URL("./Toggle.css", import.meta.url).href,
]);

/** React component for a checkbox or radio {@link HTMLInputElement input}. */
const Toggle = React.forwardRef(
  (
    /**
     * @type {ToggleProps
     *   & React.ComponentPropsWithoutRef<"label">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    {
      validationMessage,
      inputProps: { className: inputClassName, ...inputProps },
      className,
      children,
      ...props
    },

    /** @type {React.ForwardedRef<HTMLLabelElement>} */
    ref
  ) => {
    const inputRef = useMergedRef([inputProps.ref]);

    useCustomValidity(inputRef, validationMessage);
    useOnFocusReportValidity(inputRef);

    return React.createElement(
      "label",
      {
        className: classNameProp("daui-Toggle", className),
        ...props,
        ref,
      },
      React.createElement(
        "span",
        { className: "daui-Toggle__toggle" },
        React.createElement("input", {
          className: classNameProp("daui-Toggle__input", inputClassName),
          ...inputProps,
          ref: inputRef,
        }),
        React.createElement(
          "span",
          { className: "daui-Toggle__tick" },
          React.createElement(
            "span",
            { className: "daui-Toggle__icon" },
            React.createElement(IconTick)
          )
        )
      ),
      children &&
        React.createElement(
          "span",
          { className: "daui-Toggle__label" },
          children
        )
    );
  }
);

Toggle.displayName = "Toggle";

export default Toggle;

/**
 * Props for the {@linkcode Toggle} React component, excluding additional props
 * for the {@linkcode HTMLLabelElement} container.
 * @typedef {object} ToggleProps
 * @prop {string} [validationMessage] Sets the {@linkcode HTMLInputElement}
 *   [`validationMessage`](https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-validationmessage).
 *   Defaults to `""`.
 * @prop {React.ComponentPropsWithRef<"input">
 *   & { [dataAttribute: `data-${string}`]: unknown }
 *   & { type: "checkbox" | "radio" }} inputProps Props for the
 *   {@linkcode HTMLInputElement}.
 * @prop {React.ReactNode} [children] Label children. Due to the ancestor
 *   {@linkcode HTMLLabelElement}, it may only contain
 *   [phrasing content](https://html.spec.whatwg.org/dev/dom.html#phrasing-content)
 *   except {@linkcode HTMLLabelElement}.
 */
