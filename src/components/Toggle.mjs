import PropTypes from 'prop-types'
import React from 'react'
import { useCustomValidity } from '../hooks/useCustomValidity'
import { useMergedRef } from '../hooks/useMergedRef'
import { useOnFocusReportValidity } from '../hooks/useOnFocusReportValidity'
import { IconTick } from './IconTick'

export const Toggle = React.forwardRef(
  ({ validationMessage, inputProps = {}, children, ...props }, ref) => {
    const inputRef = useMergedRef([inputProps.ref])
    useCustomValidity(inputRef, validationMessage)
    useOnFocusReportValidity(inputRef)

    return (
      <label {...props} ref={ref}>
        <span className="toggle">
          <input {...inputProps} ref={inputRef} />
          <span className="tick">
            <span className="icon">
              <IconTick />
            </span>
          </span>
        </span>
        {children && <span className="label">{children}</span>}
        <style jsx>{`
          /* The input must exactly cover the toggle area, so that native
           * validation tooltips appear to point at the toggle.
           */

          label {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            position: relative;
            cursor: pointer;
          }

          .toggle {
            position: relative;
          }

          input {
            position: absolute;
            left: 0;
            top: 0;
            box-sizing: border-box;
            margin: 0;
            border: 0;
            width: 100%;
            height: 100%;
            padding: 0;
            line-height: 0;
            opacity: 0;
            pointer-events: none;
          }

          .tick {
            display: block;
            border: 2px solid;
            border-radius: 5px;
            padding: 0.15em 0.35em 0.25em;
            line-height: 1;
          }

          .icon {
            display: block;
            opacity: 0.08;
          }

          .label {
            padding: 0.5em 1.25em 0.5em 0.5em;
            font-style: italic;
          }

          :checked + .tick .icon {
            opacity: 1;
          }

          :active + .tick .icon {
            opacity: 0.5;
          }

          :invalid + .tick {
            border-color: hsl(
              var(--daui-error-hue),
              var(--daui-error-saturation),
              var(--daui-error-lightness)
            );
          }

          :not(:active):not(:focus) + .tick {
            border-left-color: transparent;
            border-right-color: transparent;
            border-top-color: transparent;
          }

          :disabled + .tick {
            opacity: 0.5;
          }
        `}</style>
      </label>
    )
  }
)

Toggle.displayName = 'Toggle'

Toggle.propTypes = {
  validationMessage: PropTypes.string,
  inputProps: PropTypes.shape({
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    ref: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.elementType })
    ])
  }).isRequired,
  children: PropTypes.node
}
