import classNameProp from "class-name-prop";
import React from "react";

import IconTick from "./IconTick.mjs";
import useCustomValidity from "./useCustomValidity.mjs";
import useMergedRef from "./useMergedRef.mjs";
import useOnFocusReportValidity from "./useOnFocusReportValidity.mjs";

const Toggle = React.forwardRef(
  (
    {
      validationMessage,
      inputProps: { inputClassName, ...inputProps } = {},
      className,
      children,
      ...props
    },
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
