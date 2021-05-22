'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren.js');

const Html = React.forwardRef(({ className, ...props }, ref) => (
  <div className={classNameProp('daui-Html', className)} {...props} ref={ref} />
));

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Html.displayName = 'Html';
  Html.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Html;
