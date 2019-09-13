import PropTypes from 'prop-types'
import React from 'react'
import { useCustomValidity } from '../hooks/useCustomValidity'
import { useMergedRef } from '../hooks/useMergedRef'
import { useOnFocusReportValidity } from '../hooks/useOnFocusReportValidity'

const BORDER_SIZE_PX = 2
const PADDING_EM = 0.3

export const Textbox = React.forwardRef(
  ({ validationMessage, type = 'text', ...props }, ref) => {
    const fieldRef = useMergedRef([ref])

    useCustomValidity(fieldRef, validationMessage)
    useOnFocusReportValidity(fieldRef)

    return (
      <>
        {type === 'textarea' ? (
          <textarea {...props} ref={fieldRef} />
        ) : (
          <input type={type} {...props} ref={fieldRef} />
        )}
        <style jsx>{`
          textarea,
          input {
            appearance: none;
            display: block;
            box-sizing: border-box;
            margin: 0;
            width: 14em;
            max-width: 100%;
            border: ${BORDER_SIZE_PX}px solid;
            border-radius: 5px;
            padding: ${PADDING_EM}em;
            font: inherit;
            font-size: 1.15rem;
            font-style: italic;
            line-height: var(--daui-line-height);
            color: inherit;
            background-color: transparent;
            box-shadow: none;
            outline: 0;
            transition: color 0.25s;
          }

          textarea::placeholder,
          input::placeholder {
            color: inherit;
            opacity: 0.2;
          }

          textarea:invalid,
          input:invalid {
            border-color: hsl(
              var(--daui-error-hue),
              var(--daui-error-saturation),
              var(--daui-error-lightness)
            );
          }

          textarea:not(:focus),
          input:not(:focus) {
            border-left-color: transparent;
            border-right-color: transparent;
            border-top-color: transparent;
          }

          textarea:disabled,
          input:disabled {
            opacity: 0.5;
          }

          textarea {
            /* Show 3 lines. */
            min-height: calc(
              1em * var(--daui-line-height) * 3 +
                (${BORDER_SIZE_PX}px + ${PADDING_EM}em) * 2
            );
            overflow-y: auto;
            resize: vertical;
          }
        `}</style>
      </>
    )
  }
)

Textbox.displayName = 'Textbox'

Textbox.propTypes = {
  type: PropTypes.oneOf(['textarea', 'text', 'number']),
  validationMessage: PropTypes.string
}
