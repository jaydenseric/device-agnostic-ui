'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren.js');

const LinkCard = React.forwardRef(({ active, className, ...props }, ref) =>
  React.createElement('a', {
    className: classNameProp(
      'daui-LinkCard',
      active && 'daui-LinkCard--active',
      className
    ),
    ...props,
    ref,
  })
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  LinkCard.displayName = 'LinkCard';
  LinkCard.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = LinkCard;
