'use strict';

const PropTypes = require('prop-types');
const React = require('react');
const Button = require('./Button');
const IconTick = require('./IconTick');
const Loading = require('./Loading');

const ButtonSubmit = React.forwardRef(
  ({ loading, success, disabled, children, ...props }, ref) => (
    <Button disabled={disabled || loading} {...props} ref={ref}>
      <div>
        <span>{children}</span>
        {loading && <Loading />}
        {!loading && success && <IconTick size="0.8em" />}
      </div>
      <style jsx>{`
        div {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: max-content;
          grid-gap: 0.5em;
          align-items: center;
        }
      `}</style>
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
