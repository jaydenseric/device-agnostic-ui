'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren.js');

const Nav = React.forwardRef(({ className, ...props }, ref) => (
  <nav className={classNameProp('daui-Nav', className)} {...props} ref={ref} />
));

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Nav.displayName = 'Nav';
  Nav.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Nav;
