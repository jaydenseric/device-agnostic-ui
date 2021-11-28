'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');

const Fieldset = React.forwardRef(
  ({ legend, children, className, ...props }, ref) =>
    React.createElement(
      'fieldset',
      {
        className: classNameProp('daui-Fieldset', className),
        ...props,
        ref,
      },
      legend &&
        React.createElement(
          'legend',
          { className: 'daui-Fieldset__legend' },
          legend
        ),
      React.createElement(
        'div',
        { className: 'daui-Fieldset__children' },
        children
      )
    )
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Fieldset.displayName = 'Fieldset';
  Fieldset.propTypes = {
    legend: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
}

module.exports = Fieldset;
