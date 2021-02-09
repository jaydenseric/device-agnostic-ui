'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');

const Fieldset = React.forwardRef(
  ({ legend, children, className, ...props }, ref) => (
    <fieldset
      className={classNameProp('daui-Fieldset', className)}
      {...props}
      ref={ref}
    >
      {legend && <legend className="daui-Fieldset__legend">{legend}</legend>}
      <div className="daui-Fieldset__children">{children}</div>
    </fieldset>
  )
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Fieldset.displayName = 'Fieldset';
  Fieldset.propTypes = {
    legend: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
}

module.exports = Fieldset;
