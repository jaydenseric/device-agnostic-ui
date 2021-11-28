"use strict";

const React = require("react");

/**
 * A React hook that sets a custom validation message on a HTML form control
 * element using the standard Constraint Validation API.
 * @param {object|null} ref React ref for the HTML form control element.
 * @param {string} [validationMessage=''] Validation message for the HTML form control element.
 */
module.exports = function useCustomValidity(ref, validationMessage = "") {
  React.useEffect(() => {
    if (ref.current) ref.current.setCustomValidity(validationMessage);
  }, [ref, validationMessage]);
};
