'use strict';

const PropTypes = require('prop-types');
const React = require('react');
const Button = require('./Button.js');
const IconTick = require('./IconTick.js');
const Loading = require('./Loading.js');

const ButtonSubmit = React.forwardRef(
  ({ loading, success, disabled, children, ...props }, ref) => (
    <Button disabled={disabled || loading} {...props} ref={ref}>
      <span className="daui-ButtonSubmit__grid">
        <span>{children}</span>
        {loading && <Loading />}
        {!loading && success && <IconTick size="0.8em" />}
      </span>
    </Button>
  )
);

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  ButtonSubmit.displayName = 'ButtonSubmit';
  ButtonSubmit.propTypes = {
    loading: PropTypes.bool,
    success: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };
}

module.exports = ButtonSubmit;
