'use strict';

const PropTypes = require('prop-types');
const React = require('react');
const useCustomValidity = require('../hooks/useCustomValidity');
const useMergedRef = require('../hooks/useMergedRef');
const useOnFocusReportValidity = require('../hooks/useOnFocusReportValidity');
const propTypeChildren = require('../utils/propTypeChildren');

const PADDING_EM = 0.3;
const ARROW_WIDTH_EM = 0.55;

const Select = React.forwardRef(({ validationMessage, ...props }, ref) => {
  const selectRef = useMergedRef([ref]);

  useCustomValidity(selectRef, validationMessage);
  useOnFocusReportValidity(selectRef);

  return (
    <>
      <select {...props} ref={selectRef} />
      <style jsx>{`
        select {
          appearance: none;
          display: block;
          box-sizing: border-box;
          margin: 0;
          border: 2px solid;
          border-radius: 5px;
          max-width: 100%;
          padding: ${PADDING_EM}em;
          font: inherit;
          font-size: 115%;
          font-style: italic;
          line-height: var(--daui-line-height);
          color: inherit;
          background-color: transparent;
          box-shadow: none;
          outline: 0;
        }

        select:invalid {
          border-color: hsl(
            var(--daui-error-hue),
            var(--daui-error-saturation),
            var(--daui-error-lightness)
          );
        }

        select:not(:focus) {
          border-left-color: transparent;
          border-right-color: transparent;
          border-top-color: transparent;
        }

        select:disabled {
          opacity: 0.5;
          cursor: default;
        }

        select::-ms-expand {
          display: none;
        }

        /* Single option visible: */

        select:not([multiple]):not([size]),
        select[size='1']:not([multiple]) {
          padding-right: ${PADDING_EM * 2 + ARROW_WIDTH_EM}em;
          background-image: linear-gradient(
              45deg,
              transparent 50%,
              currentColor 50%
            ),
            linear-gradient(-45deg, transparent 50%, currentColor 50%);
          background-size: ${ARROW_WIDTH_EM / 2}em ${ARROW_WIDTH_EM / 2}em;
          background-position: calc(100% - ${ARROW_WIDTH_EM / 2 + PADDING_EM}em)
              center,
            calc(100% - ${PADDING_EM}em) center;
          background-repeat: no-repeat;
          cursor: pointer;
        }

        /* Multiple options visible: */

        select[multiple]:not([size]) {
          overflow-y: auto;
          resize: vertical;
        }

        select[multiple] :global(option),
        select[size]:not([size='1']) :global(option) {
          cursor: pointer;
        }
      `}</style>
    </>
  );
});

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Select.displayName = 'Select';
  Select.propTypes = {
    validationMessage: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Select;
