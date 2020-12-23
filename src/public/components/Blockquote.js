'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const stylesBlockquote = require('../styles/stylesBlockquote');
const propTypeChildren = require('../utils/propTypeChildren');

const Blockquote = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <blockquote
      className={classNameProp(stylesBlockquote.className, className)}
      {...props}
      ref={ref}
    />
    {stylesBlockquote.styles}
  </>
));

Blockquote.displayName = 'Blockquote';

Blockquote.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired,
};

module.exports = Blockquote;
