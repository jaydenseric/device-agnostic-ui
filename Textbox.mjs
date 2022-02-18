// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

import useCustomValidity from "./useCustomValidity.mjs";
import useMergedRef from "./useMergedRef.mjs";
import useOnFocusReportValidity from "./useOnFocusReportValidity.mjs";

// Todo: The `type` prop should determine the types for other props and the ref.

/**
 * React component for an {@link HTMLInputElement input} or
 * {@link HTMLTextAreaElement textarea}.
 */
const Textbox = React.forwardRef(
  (
    /**
     * @type {TextboxProps
     *   & React.ComponentPropsWithoutRef<"input">
     *   & React.ComponentPropsWithoutRef<"textarea">
     *   & import("./types.mjs").DataAttributes}
     */
    { type = "text", validationMessage, className, ...props },

    /** @type {React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>} */
    ref
  ) => {
    const fieldRef = useMergedRef([ref]);
    const classNameMerged = classNameProp("daui-Textbox", className);

    useCustomValidity(fieldRef, validationMessage);
    useOnFocusReportValidity(fieldRef);

    return type === "textarea"
      ? React.createElement("textarea", {
          className: classNameMerged,
          ...props,
          ref: fieldRef,
        })
      : React.createElement("input", {
          className: classNameMerged,
          type,
          ...props,
          ref: fieldRef,
        });
  }
);

Textbox.displayName = "Textbox";

export default Textbox;

/**
 * Props for the {@linkcode Textbox} React component, excluding additional props
 * for the {@linkcode HTMLInputElement} or {@linkcode HTMLTextAreaElement}.
 * @typedef {object} TextboxProps
 * @prop {"date"
 *   | "datetime-local"
 *   | "email"
 *   | "month"
 *   | "number"
 *   | "password"
 *   | "search"
 *   | "tel"
 *   | "text"
 *   | "textarea"
 *   | "time"
 *   | "url"
 *   | "week"} [type] Either `"textarea"` to create a
 *   {@link HTMLTextAreaElement textarea}, or a text based
 *   {@link HTMLInputElement input}
 *   [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type).
 *   Defaults to `"text"`.
 * @prop {string} [validationMessage] Sets the
 *   [`validationMessage`](https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-validationmessage).
 *   Defaults to `""`.
 */
