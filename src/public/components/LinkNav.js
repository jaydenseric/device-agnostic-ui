'use strict';

const classNameProp = require('class-name-prop');
const PropTypes = require('prop-types');
const React = require('react');
const propTypeChildren = require('../utils/propTypeChildren');

const LinkNav = React.forwardRef(({ active, className, ...props }, ref) => (
  <>
    <a
      className={classNameProp(className, active && 'active')}
      {...props}
      ref={ref}
    />
    <style jsx>{`
      a {
        display: flex;
        align-items: flex-end;
        padding: 0.5em 0;
        white-space: nowrap;
        text-decoration: none;
        color: hsl(
          var(--daui-interact-hue),
          var(--daui-interact-saturation),
          var(--daui-interact-lightness)
        );
      }

      a:focus,
      .active {
        box-shadow: inset 0 -2px;
      }

      a:focus {
        color: hsl(
          var(--daui-interact-hue),
          var(--daui-interact-saturation),
          calc(var(--daui-interact-lightness) + 10%)
        );
        outline: 0;
      }

      a:active {
        color: hsl(
          var(--daui-interact-hue),
          var(--daui-interact-saturation),
          calc(var(--daui-interact-lightness) + 20%)
        );
      }
    `}</style>
  </>
));

LinkNav.displayName = 'LinkNav';

LinkNav.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: propTypeChildren.isRequired,
};

module.exports = LinkNav;
