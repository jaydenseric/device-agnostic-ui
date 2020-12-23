'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const stylesCode = require('../styles/stylesCode');
const propTypeChildren = require('../utils/propTypeChildren');

const Code = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <code
      className={classNameProp(stylesCode.className, className)}
      {...props}
      ref={ref}
    />
    {stylesCode.styles}
  </>
));

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Code.displayName = 'Code';
  Code.propTypes = {
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Code;
