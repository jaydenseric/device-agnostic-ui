// @ts-check

import React from "react";

import Button, { css as cssButton } from "./Button.mjs";
import IconTick, { css as cssIconTick } from "./IconTick.mjs";
import Loading, { css as cssLoading } from "./Loading.mjs";

/** CSS dependency URLs for the React component {@linkcode ButtonSubmit}. */
export const css = new Set([
  ...cssButton,
  ...cssIconTick,
  ...cssLoading,
  new URL("./ButtonSubmit.css", import.meta.url).href,
]);

/**
 * React component for a form submit button that displays loading and success
 * state.
 */
const ButtonSubmit = React.forwardRef(
  (
    /**
     * @type {ButtonSubmitProps
     *   & React.ComponentPropsWithoutRef<typeof Button>
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { loading, success, disabled, children, ...props },

    /** @type {React.ForwardedRef<HTMLButtonElement>} */
    ref
  ) =>
    React.createElement(
      Button,
      {
        disabled: disabled || loading,
        ...props,
        ref,
      },
      React.createElement(
        "span",
        {
          className: "daui-ButtonSubmit__grid",
        },
        React.createElement("span", null, children),
        loading && React.createElement(Loading),
        !loading && success && React.createElement(IconTick, { size: "0.8em" })
      )
    )
);

ButtonSubmit.displayName = "ButtonSubmit";

export default ButtonSubmit;

/**
 * Props for the {@linkcode ButtonSubmit} React component, excluding additional
 * props for the {@linkcode Button} component container.
 * @typedef {object} ButtonSubmitProps
 * @prop {boolean} [loading] Is the button’s action loading. When `true`, the
 *   button is disabled and displays a loading animation. Defaults to `false`.
 * @prop {boolean} [success] Is the button’s action successful. When `true`, and
 *   the `loading` prop is `false`, the button displays a tick icon. Defaults to
 *   `false`.
 */
