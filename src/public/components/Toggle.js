'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const useCustomValidity = require('../hooks/useCustomValidity');
const useMergedRef = require('../hooks/useMergedRef');
const useOnFocusReportValidity = require('../hooks/useOnFocusReportValidity');
const IconTick = require('./IconTick');

const Toggle = React.forwardRef(
  (
    {
      validationMessage,
      inputProps: { inputClassName, ...inputProps } = {},
      className,
      children,
      ...props
    },
    ref
  ) => {
    const inputRef = useMergedRef([inputProps.ref]);

    useCustomValidity(inputRef, validationMessage);
    useOnFocusReportValidity(inputRef);

    return (
      <label
        className={classNameProp('daui-Toggle', className)}
        {...props}
        ref={ref}
      >
        <span className="daui-Toggle__toggle">
          <input
            className={classNameProp('daui-Toggle__input', inputClassName)}
            {...inputProps}
            ref={inputRef}
          />
          <span className="daui-Toggle__tick">
            <span className="daui-Toggle__icon">
              <IconTick />
            </span>
          </span>
        </span>
        {children && <span className="daui-Toggle__label">{children}</span>}
      </label>
    );
  }
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Toggle.displayName = 'Toggle';
  Toggle.propTypes = {
    validationMessage: PropTypes.string,
    inputProps: PropTypes.shape({
      type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
      className: PropTypes.string,
      ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.elementType }),
      ]),
    }).isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
  };
}

module.exports = Toggle;
