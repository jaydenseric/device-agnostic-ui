import classNameProp from 'class-name-prop'
import PropTypes from 'prop-types'
import React from 'react'
import { propTypeChildren } from '../utils/propTypeChildren'

export const LinkNav = React.forwardRef(
  ({ active, className, ...props }, ref) => (
    <>
      <a
        className={classNameProp(className, active && 'active')}
        {...props}
        ref={ref}
      />
      <style jsx>{`
        a {
          display: flex;
          align-items: center;
          padding: 0.65em 0.25em;
          margin: 0.35em;
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
  )
)

LinkNav.displayName = 'LinkNav'

LinkNav.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: propTypeChildren.isRequired
}
