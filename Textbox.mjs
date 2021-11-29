import classNameProp from "class-name-prop";
import React from "react";
import useCustomValidity from "./useCustomValidity.mjs";
import useMergedRef from "./useMergedRef.mjs";
import useOnFocusReportValidity from "./useOnFocusReportValidity.mjs";

const Textbox = React.forwardRef(
  ({ validationMessage, type = "text", className, ...props }, ref) => {
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
