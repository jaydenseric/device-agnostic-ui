'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const stylesLinkText = require('../styles/stylesLinkText');
const propTypeChildren = require('../utils/propTypeChildren');

const LinkText = React.forwardRef(({ active, className, ...props }, ref) => (
  <>
    <a
      className={classNameProp(
        stylesLinkText.className,
        className,
        active && 'active'
      )}
      {...props}
      ref={ref}
    />
    {stylesLinkText.styles}
  </>
));

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  LinkText.displayName = 'LinkText';
  LinkText.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = LinkText;
