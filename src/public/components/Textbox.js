'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const useCustomValidity = require('../hooks/useCustomValidity.js');
const useMergedRef = require('../hooks/useMergedRef.js');
const useOnFocusReportValidity = require('../hooks/useOnFocusReportValidity.js');

const Textbox = React.forwardRef(
  ({ validationMessage, type = 'text', className, ...props }, ref) => {
    const fieldRef = useMergedRef([ref]);
    const classNameMerged = classNameProp('daui-Textbox', className);

    useCustomValidity(fieldRef, validationMessage);
    useOnFocusReportValidity(fieldRef);

    return type === 'textarea' ? (
      <textarea className={classNameMerged} {...props} ref={fieldRef} />
    ) : (
      <input
        className={classNameMerged}
        type={type}
        {...props}
        ref={fieldRef}
      />
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
    className: PropTypes.string,
  };
}

module.exports = Textbox;
