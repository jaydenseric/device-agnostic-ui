'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const stylesTable = require('../styles/stylesTable');
const propTypeChildren = require('../utils/propTypeChildren');

const Table = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <table
      className={classNameProp(stylesTable.className, className)}
      {...props}
      ref={ref}
    />
    {stylesTable.styles}
  </>
));

Table.displayName = 'Table';

Table.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired,
};

module.exports = Table;
