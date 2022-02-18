// @ts-check

import React from "react";

/**
 * A React hook that sets a custom validation message on a HTML form control
 * element using the standard Constraint Validation API.
 * @param {React.RefObject<
 *   | HTMLButtonElement
 *   | HTMLFieldSetElement
 *   | HTMLInputElement
 *   | HTMLObjectElement
 *   | HTMLOutputElement
 *   | HTMLSelectElement
 *   | HTMLTextAreaElement
 * >} ref React ref for the HTML form control element.
 * @param {string} [validationMessage] Validation message for the HTML form
 *   control element. Defaults to `""`.
 */
export default function useCustomValidity(ref, validationMessage = "") {
  React.useEffect(() => {
    if (ref.current) ref.current.setCustomValidity(validationMessage);
  }, [ref, validationMessage]);
}
