import PropTypes from 'prop-types'
import React from 'react'
import { propTypeChildren } from '../utils/propTypeChildren'

export const Picture = React.forwardRef(({ width, height, ...props }, ref) => (
  <>
    <picture {...props} ref={ref} />
    <style jsx>{`
      picture {
        position: relative;
        display: block;
        max-width: 100%;
      }

      picture::before {
        content: '';
        display: block;
      }

      picture :global(img) {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
    <style jsx>{`
      picture::before {
        padding-top: calc(100% * ${height} / ${width});
      }
    `}</style>
  </>
))

Picture.displayName = 'Picture'

Picture.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: propTypeChildren.isRequired
}
