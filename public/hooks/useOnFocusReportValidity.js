'use strict';

const React = require('react');

/**
 * A React hook that displays an invalid HTML form control element’s validation
 * message on focus, using the standard Constraint Validation API.
 * @param {object|null} ref React ref for the HTML form control element.
 */
module.exports = function useOnFocusReportValidity(ref) {
  React.useEffect(() => {
    if (ref.current) {
      const inputElement = ref.current;
      const onFocus = () => {
        inputElement.reportValidity();
      };

      inputElement.addEventListener('focus', onFocus);

      return () => {
        inputElement.removeEventListener('focus', onFocus);
      };
    }
  }, [ref]);
};
