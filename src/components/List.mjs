import PropTypes from 'prop-types'
import React from 'react'
import { stylesList } from '../styles/stylesList'

export const List = React.forwardRef(
  ({ ordered, className, children, ...props }, ref) => {
    const Element = ordered ? 'ol' : 'ul'
    return (
      <Element
        className={`${stylesList.className}${className ? ` ${className}` : ''}`}
        {...props}
        ref={ref}
      >
        {children}
        {stylesList.styles}
      </Element>
    )
  }
)

List.displayName = 'List'

List.propTypes = {
  ordered: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
