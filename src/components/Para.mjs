import PropTypes from 'prop-types'
import React from 'react'
import { stylesPara } from '../styles/stylesPara'

export const Para = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <p
      className={`${stylesPara.className}${className ? ` ${className}` : ''}`}
      {...props}
      ref={ref}
    >
      {children}
      {stylesPara.styles}
    </p>
  )
)

Para.displayName = 'Para'

Para.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
