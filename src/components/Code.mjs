import PropTypes from 'prop-types'
import React from 'react'
import { stylesCode } from '../styles/Code'

export const Code = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <code
      className={`${stylesCode.className}${className ? ` ${className}` : ''}`}
      {...props}
      ref={ref}
    >
      {children}
      {stylesCode.styles}
    </code>
  )
)

Code.displayName = 'Code'

Code.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
