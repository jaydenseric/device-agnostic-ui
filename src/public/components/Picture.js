'use strict';

const PropTypes = require('prop-types');
const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren');

const Picture = React.forwardRef(({ width, height, ...props }, ref) => (
  <>
    <picture {...props} ref={ref} />
    <style jsx>{`
      picture {
        position: relative;
        display: block;
        max-width: 100%;
      }

      picture::before {
        content: '';
        display: block;
      }

      picture :global(img) {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
    <style jsx>{`
      picture::before {
        padding-top: calc(100% * ${height} / ${width});
      }
    `}</style>
  </>
));

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Picture.displayName = 'Picture';
  Picture.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string,
    children: propTypeChildren.isRequired,
  };
}

module.exports = Picture;
