'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const stylesPre = require('../styles/stylesPre');
const propTypeChildren = require('../utils/propTypeChildren');

const Pre = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <pre
      className={classNameProp(stylesPre.className, className)}
      {...props}
      ref={ref}
    />
    {stylesPre.styles}
  </>
));

Pre.displayName = 'Pre';

Pre.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired,
};

module.exports = Pre;
