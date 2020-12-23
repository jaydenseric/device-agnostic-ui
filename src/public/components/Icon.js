'use strict';

const PropTypes = require('prop-types');
const React = require('react');

const Icon = React.forwardRef(
  ({ size = '1em', title, children, ...props }, ref) => (
    <svg width={size} height={size} viewBox="0 0 32 32" {...props} ref={ref}>
      <title>{title} icon</title>
      {children}
      <style jsx>{`
        svg {
          vertical-align: middle;
          stroke: currentColor;
          fill: currentColor;
        }
      `}</style>
    </svg>
  )
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Icon.displayName = 'Icon';
  Icon.propTypes = {
    size: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
}

module.exports = Icon;
