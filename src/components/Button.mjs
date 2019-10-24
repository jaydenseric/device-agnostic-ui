import PropTypes from 'prop-types'
import React from 'react'
import { propTypeChildren } from '../utils/propTypeChildren'

export const Button = React.forwardRef(({ disabled, ...props }, ref) => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <button disabled={disabled || !isMounted} {...props} ref={ref} />
      <style jsx>{`
        button {
          vertical-align: middle;
          box-sizing: border-box;
          margin: 0;
          border: 0;
          border-radius: 10em;
          max-width: 100%;
          padding: 0.7em 1.25em 0.75em;
          line-height: var(--daui-line-height);
          font-family: inherit;
          font-size: inherit;
          color: hsl(
            var(--daui-background-hue),
            var(--daui-background-saturation),
            var(--daui-background-lightness)
          );
          background-color: hsl(
            var(--daui-foreground-hue),
            var(--daui-foreground-saturation),
            var(--daui-foreground-lightness)
          );
          box-shadow: 0 0.25em 1em hsla(0, 0%, 0%, var(--daui-shadow-opacity));
          cursor: pointer;
        }

        button::-moz-focus-inner {
          border: 0;
        }

        button:focus {
          background-color: hsl(
            var(--daui-interact-hue),
            var(--daui-interact-saturation),
            calc(var(--daui-interact-lightness) + 10%)
          );
          outline: 0;
        }

        button:active {
          background-color: hsl(
            var(--daui-interact-hue),
            var(--daui-interact-saturation),
            calc(var(--daui-interact-lightness) + 20%)
          );
        }

        button:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }
      `}</style>
    </>
  )
})

Button.displayName = 'Button'

Button.propTypes = {
  disabled: PropTypes.bool,
  children: propTypeChildren.isRequired
}
