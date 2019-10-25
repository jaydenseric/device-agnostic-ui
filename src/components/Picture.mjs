import PropTypes from 'prop-types'
import React from 'react'

export const Picture = React.forwardRef(
  ({ width, height, alt, src, round, children, ...props }, ref) => (
    <picture {...props} ref={ref}>
      {children}
      <img className={round ? 'round' : undefined} src={src} alt={alt} />
      <style jsx>{`
        picture {
          position: relative;
          display: block;
          width: ${width}px;
          max-width: 100%;
        }

        picture::before {
          content: '';
          display: block;
          padding-top: calc(100% * ${height} / ${width});
        }

        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .round {
          border-radius: 50%;
        }
      `}</style>
    </picture>
  )
)

Picture.displayName = 'Picture'

Picture.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  round: PropTypes.bool,
  children: PropTypes.node
}
