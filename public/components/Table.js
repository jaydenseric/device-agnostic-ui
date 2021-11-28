'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren.js');

const Table = React.forwardRef(({ className, ...props }, ref) =>
  React.createElement('table', {
    className: classNameProp('daui-Table', className),
    ...props,
    ref,
  })
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Table.displayName = 'Table';
  Table.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Table;
