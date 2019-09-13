import React from 'react'

/**
 * A React hook that reports the validity of a HTML form element when it is
 * focused, giving users the ability to see why form fields are invalid without
 * having to submit the form.
 * @param {object|null} ref React ref for the HTML form element.
 */
export function useOnFocusReportValidity(ref) {
  React.useEffect(() => {
    if (ref.current) {
      const inputElement = ref.current
      const onFocus = () => {
        inputElement.reportValidity()
      }

      inputElement.addEventListener('focus', onFocus)

      return () => {
        inputElement.removeEventListener('focus', onFocus)
      }
    }
  }, [ref])
}
