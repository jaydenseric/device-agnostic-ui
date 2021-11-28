'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren.js');

const Pre = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement('pre', {
    className: classNameProp('daui-Pre', className),
    ...props,
    ref,
  })
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Pre.displayName = 'Pre';
  Pre.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Pre;
