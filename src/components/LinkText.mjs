import PropTypes from 'prop-types'
import React from 'react'
import { stylesLinkText } from '../styles/LinkText'

export const LinkText = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <a
      className={`${stylesLinkText.className}${
        className ? ` ${className}` : ''
      }`}
      {...props}
      ref={ref}
    >
      {children}
      {stylesLinkText.styles}
    </a>
  )
)

LinkText.displayName = 'LinkText'

LinkText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
