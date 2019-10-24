import PropTypes from 'prop-types'
import React from 'react'
import { classNameProp } from '../utils/classNameProp'
import { propTypeChildren } from '../utils/propTypeChildren'

export const LinkCard = React.forwardRef(
  ({ active, className, ...props }, ref) => (
    <>
      <a
        className={classNameProp(className, active && 'active')}
        {...props}
        ref={ref}
      />
      <style jsx>{`
        a {
          align-self: stretch;
          position: relative;
          display: block;
          border: 2px solid transparent;
          border-radius: 3px;
          width: fit-content;
          max-width: 100%;
          text-decoration: none;
          color: hsl(
            var(--daui-foreground-hue),
            var(--daui-foreground-saturation),
            var(--daui-foreground-lightness)
          );
          background-color: hsl(
            var(--daui-background-hue),
            var(--daui-background-saturation),
            var(--daui-background-lightness)
          );
          box-shadow: 0 2px 16px hsla(0, 0%, 0%, var(--daui-shadow-opacity));
          overflow: hidden;
        }

        a:focus,
        .active {
          border-color: hsl(
            var(--daui-interact-hue),
            var(--daui-interact-saturation),
            calc(var(--daui-interact-lightness) + 10%)
          );
          outline: 0;
        }

        a:active {
          border-color: hsl(
            var(--daui-interact-hue),
            var(--daui-interact-saturation),
            calc(var(--daui-interact-lightness) + 20%)
          );
        }
      `}</style>
    </>
  )
)

LinkCard.displayName = 'LinkCard'

LinkCard.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: propTypeChildren.isRequired
}
