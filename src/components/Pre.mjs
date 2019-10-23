import PropTypes from 'prop-types'
import React from 'react'
import { stylesPre } from '../styles/stylesPre'

export const Pre = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <pre
      className={`${stylesPre.className}${className ? ` ${className}` : ''}`}
      {...props}
      ref={ref}
    >
      {children}
      {stylesPre.styles}
    </pre>
  )
)

Pre.displayName = 'Pre'

Pre.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
