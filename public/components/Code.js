'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren.js');

const Code = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement('code', {
    className: classNameProp('daui-Code', className),
    ...props,
    ref,
  })
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Code.displayName = 'Code';
  Code.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Code;
