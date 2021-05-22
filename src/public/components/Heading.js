'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const LinkText = require('./LinkText.js');

const Heading = React.forwardRef(
  ({ level = 1, size, id, className, style, children, ...props }, ref) => {
    const H = `h${level}`;

    return (
      <H
        className={classNameProp('daui-Heading', className)}
        id={id}
        {...props}
        style={
          size
            ? {
                fontSize: `var(--daui-h${size}-font-size)`,
                ...style,
              }
            : style
        }
        ref={ref}
      >
        {id ? <LinkText href={`#${id}`}>{children}</LinkText> : children}
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
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
  };
}

module.exports = Heading;
