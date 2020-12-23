'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const stylesList = require('../styles/stylesList');
const propTypeChildren = require('../utils/propTypeChildren');

const List = React.forwardRef(({ ordered, className, ...props }, ref) => {
  const Element = ordered ? 'ol' : 'ul';
  return (
    <>
      <Element
        className={classNameProp(stylesList.className, className)}
        {...props}
        ref={ref}
      />
      {stylesList.styles}
    </>
  );
});

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  List.displayName = 'List';
  List.propTypes = {
    ordered: PropTypes.bool,
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = List;
