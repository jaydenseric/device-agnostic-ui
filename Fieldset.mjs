// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/** React component for a {@link HTMLFieldSetElement fieldset}. */
const Fieldset = React.forwardRef(
  (
    /**
     * @type {FieldsetProps
     *   & React.ComponentPropsWithoutRef<"fieldset">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { legend, children, className, ...props },

    /** @type {React.ForwardedRef<HTMLFieldSetElement>} */
    ref
  ) =>
    React.createElement(
      "fieldset",
      {
        className: classNameProp("daui-Fieldset", className),
        ...props,
        ref,
      },
      legend &&
        React.createElement(
          "legend",
          { className: "daui-Fieldset__legend" },
          legend
        ),
      React.createElement(
        "div",
        { className: "daui-Fieldset__children" },
        children
      )
    )
);

Fieldset.displayName = "Fieldset";

export default Fieldset;

/**
 * Props for the {@linkcode Fieldset} React component, excluding additional
 * props for the {@linkcode HTMLFieldSetElement} container.
 * @typedef {object} FieldsetProps
 * @prop {React.ReactNode} [legend] {@link HTMLLegendElement Legend} children.
 *   May only contain
 *   [phrasing content](https://html.spec.whatwg.org/dev/dom.html#phrasing-content)
 *   and
 *   [heading content](https://html.spec.whatwg.org/dev/dom.html#heading-content).
 */
