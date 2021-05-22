'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren.js');

const Blockquote = React.forwardRef(({ className, ...props }, ref) => (
  <blockquote
    className={classNameProp('daui-Blockquote', className)}
    {...props}
    ref={ref}
  />
));

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Blockquote.displayName = 'Blockquote';
  Blockquote.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Blockquote;
