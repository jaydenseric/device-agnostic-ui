"use strict";

const classNameProp = require("class-name-prop");
const PropTypes = require("prop-types");
const React = require("react");
const useCustomValidity = require("../hooks/useCustomValidity.js");
const useMergedRef = require("../hooks/useMergedRef.js");
const useOnFocusReportValidity = require("../hooks/useOnFocusReportValidity.js");
const propTypeChildren = require("../utils/propTypeChildren.js");

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

module.exports = Select;
