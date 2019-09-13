import PropTypes from 'prop-types'
import React from 'react'
import { stylesBlockquote } from '../styles/Blockquote'

export const Blockquote = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <blockquote
      className={`${stylesBlockquote.className}${
        className ? ` ${className}` : ''
      }`}
      {...props}
      ref={ref}
    >
      {children}
      {stylesBlockquote.styles}
    </blockquote>
  )
)

Blockquote.displayName = 'Blockquote'

Blockquote.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
