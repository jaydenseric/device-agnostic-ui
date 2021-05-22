'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren.js');

const Picture = React.forwardRef(
  ({ width, height, className, style, ...props }, ref) => (
    <picture
      className={classNameProp('daui-Picture', className)}
      {...props}
      style={{
        ...style,
        '--daui-Picture-width': width,
        '--daui-Picture-height': height,
      }}
      ref={ref}
    />
  )
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Picture.displayName = 'Picture';
  Picture.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Picture;
