import classNameProp from 'class-name-prop'
import PropTypes from 'prop-types'
import React from 'react'
import { stylesHeading } from '../styles/stylesHeading'
import { LinkText } from './LinkText'

export const Heading = React.forwardRef(
  ({ id, className, children, ...props }, ref) => (
    <h1
      className={classNameProp(stylesHeading.className, className)}
      id={id}
      {...props}
      ref={ref}
    >
      {id ? <LinkText href={`#${id}`}>{children}</LinkText> : children}
      {stylesHeading.styles}
    </h1>
  )
)

Heading.displayName = 'Heading'

Heading.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
