'use strict';

const PropTypes = require('prop-types');
const React = require('react');
const useCustomValidity = require('../hooks/useCustomValidity');
const useMergedRef = require('../hooks/useMergedRef');
const useOnFocusReportValidity = require('../hooks/useOnFocusReportValidity');

const BORDER_SIZE_PX = 2;
const PADDING_EM = 0.3;

const Textbox = React.forwardRef(
  ({ validationMessage, type = 'text', ...props }, ref) => {
    const fieldRef = useMergedRef([ref]);

    useCustomValidity(fieldRef, validationMessage);
    useOnFocusReportValidity(fieldRef);

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
            font-size: 115%;
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
    );
  }
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Textbox.displayName = 'Textbox';
  Textbox.propTypes = {
    type: PropTypes.oneOf([
      // Standard:
      'date',
      'datetime-local',
      'email',
      'month',
      'number',
      'password',
      'search',
      'tel',
      'text',
      'time',
      'url',
      'week',

      // Non standard:
      'textarea',
    ]),
    validationMessage: PropTypes.string,
  };
}

module.exports = Textbox;