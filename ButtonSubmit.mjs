import React from "react";

import Button from "./Button.mjs";
import IconTick from "./IconTick.mjs";
import Loading from "./Loading.mjs";

const ButtonSubmit = React.forwardRef(
  ({ loading, success, disabled, children, ...props }, ref) =>
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
