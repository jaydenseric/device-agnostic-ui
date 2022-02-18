// @ts-check

import React from "react";

/**
 * A React hook that displays an invalid HTML form control element’s validation
 * message on focus, using the standard Constraint Validation API.
 * @param {React.RefObject<
 *   | HTMLButtonElement
 *   | HTMLFieldSetElement
 *   | HTMLInputElement
 *   | HTMLObjectElement
 *   | HTMLOutputElement
 *   | HTMLSelectElement
 *   | HTMLTextAreaElement
 * >} ref React ref for the HTML form control element.
 */
export default function useOnFocusReportValidity(ref) {
  React.useEffect(() => {
    if (ref.current) {
      const inputElement = ref.current;
      const onFocus = () => {
        inputElement.reportValidity();
      };

      inputElement.addEventListener("focus", onFocus);

      return () => {
        inputElement.removeEventListener("focus", onFocus);
      };
    }
  }, [ref]);
}
