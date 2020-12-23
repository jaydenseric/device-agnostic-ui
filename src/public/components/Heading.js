'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const css = require('styled-jsx/css');
const stylesHeading = require('../styles/stylesHeading');
const LinkText = require('./LinkText');

const getStylesH = (size) =>
  // See: https://github.com/prettier/prettier/issues/6259#issuecomment-513931664
  // prettier-ignore
  css.resolve`
    & {
      font-size: var(--daui-h${size}-font-size);
    }
  `;

const Heading = React.forwardRef(
  ({ level = 1, size, id, className, children, ...props }, ref) => {
    const H = `h${level}`;

    if (size) var stylesH = getStylesH(size);

    return (
      <H
        className={classNameProp(
          stylesHeading.className,
          stylesH && stylesH.className,
          className
        )}
        id={id}
        {...props}
        ref={ref}
      >
        {id ? <LinkText href={`#${id}`}>{children}</LinkText> : children}
        {stylesHeading.styles}
        {stylesH && stylesH.styles}
      </H>
    );
  }
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Heading.displayName = 'Heading';
  Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
}

module.exports = Heading;
