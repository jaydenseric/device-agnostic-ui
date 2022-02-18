// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

import useCustomValidity from "./useCustomValidity.mjs";
import useMergedRef from "./useMergedRef.mjs";
import useOnFocusReportValidity from "./useOnFocusReportValidity.mjs";

/** React component for an input that provides a selection of options. */
const Select = React.forwardRef(
  (
    /**
     * @type {SelectProps
     *   & React.ComponentPropsWithoutRef<"select">
     *   & import("./types.mjs").DataAttributes}
     */
    { validationMessage, className, ...props },

    /** @type {React.ForwardedRef<HTMLSelectElement>} */
    ref
  ) => {
    const selectRef = useMergedRef([ref]);

    useCustomValidity(selectRef, validationMessage);
    useOnFocusReportValidity(selectRef);

    return React.createElement("select", {
      className: classNameProp("daui-Select", className),
      ...props,
      ref: selectRef,
    });
  }
);

Select.displayName = "Select";

export default Select;

/**
 * Props for the {@linkcode Select} React component, excluding additional props
 * for the {@linkcode HTMLSelectElement}.
 * @typedef {object} SelectProps
 * @prop {string} [validationMessage] Sets the
 *   [`validationMessage`](https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-validationmessage).
 *   Defaults to `""`.
 */
