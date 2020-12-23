'use strict';

const PropTypes = require('prop-types');
const React = require('react');

const Fieldset = React.forwardRef(({ legend, children, ...props }, ref) => (
  <fieldset {...props} ref={ref}>
    {legend && <legend>{legend}</legend>}
    <div>{children}</div>
    <style jsx>{`
      fieldset {
        margin: 1.5em 0;
        border: 0;
        min-width: 0;
        padding: 0;
      }

      fieldset:first-child {
        margin-top: 0;
      }

      fieldset:last-child {
        margin-bottom: 0;
      }

      legend {
        margin-bottom: 0.3em;
        width: 100%;
        padding: 0;
        float: left;
        text-align: left;
        font-size: 90%;
        font-weight: bold;
        font-style: italic;
        line-height: var(--daui-line-height);
      }

      div {
        clear: left;
      }
    `}</style>
  </fieldset>
));

Fieldset.displayName = 'Fieldset';

Fieldset.propTypes = {
  legend: PropTypes.node,
  children: PropTypes.node.isRequired,
};

module.exports = Fieldset;
