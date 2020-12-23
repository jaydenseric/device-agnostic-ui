'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const stylesBlockquote = require('../styles/stylesBlockquote');
const stylesCode = require('../styles/stylesCode');
const stylesHeading = require('../styles/stylesHeading');
const stylesHtml = require('../styles/stylesHtml');
const stylesLinkText = require('../styles/stylesLinkText');
const stylesList = require('../styles/stylesList');
const stylesPara = require('../styles/stylesPara');
const stylesPre = require('../styles/stylesPre');
const stylesTable = require('../styles/stylesTable');
const propTypeChildren = require('../utils/propTypeChildren');

const Html = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <div
      className={classNameProp(stylesHtml.className, className)}
      {...props}
      ref={ref}
    />
    {stylesBlockquote.styles}
    {stylesCode.styles}
    {stylesHeading.styles}
    {stylesLinkText.styles}
    {stylesList.styles}
    {stylesPara.styles}
    {stylesPre.styles}
    {stylesTable.styles}
    {stylesHtml.styles}
  </>
));

Html.displayName = 'Html';

Html.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired,
};

module.exports = Html;
