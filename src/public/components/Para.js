'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const stylesPara = require('../styles/stylesPara');
const propTypeChildren = require('../utils/propTypeChildren');

const Para = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <p
      className={classNameProp(stylesPara.className, className)}
      {...props}
      ref={ref}
    />
    {stylesPara.styles}
  </>
));

Para.displayName = 'Para';

Para.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired,
};

module.exports = Para;
