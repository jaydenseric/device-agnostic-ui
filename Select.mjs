import classNameProp from "class-name-prop";
import PropTypes from "prop-types";
import React from "react";
import propTypeChildren from "./propTypeChildren.mjs";
import useCustomValidity from "./useCustomValidity.mjs";
import useMergedRef from "./useMergedRef.mjs";
import useOnFocusReportValidity from "./useOnFocusReportValidity.mjs";

const Select = React.forwardRef(
  ({ validationMessage, className, ...props }, ref) => {
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

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  Select.displayName = "Select";
  Select.propTypes = {
    validationMessage: PropTypes.string,
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

export default Select;
