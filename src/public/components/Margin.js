'use strict';

const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren');

const Margin = React.forwardRef((props, ref) => (
  <>
    <div {...props} ref={ref} />
    <style jsx>{`
      div {
        margin: var(--daui-spacing);
      }
    `}</style>
  </>
));

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Margin.displayName = 'Margin';
  Margin.propTypes = {
    children: propTypeChildren.isRequired,
  };
}

module.exports = Margin;
