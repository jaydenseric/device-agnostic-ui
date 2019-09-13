import PropTypes from 'prop-types'
import React from 'react'

export const LinkNav = React.forwardRef(
  ({ active, children, ...props }, ref) => (
    <a className={active ? 'active' : undefined} {...props} ref={ref}>
      {children}
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
    </a>
  )
)

LinkNav.displayName = 'LinkNav'

LinkNav.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
}
