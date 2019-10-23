import PropTypes from 'prop-types'
import React from 'react'
import { stylesHeading } from '../styles/stylesHeading'
import { LinkText } from './LinkText'

export const Heading = React.forwardRef(({ id, children, ...props }, ref) => (
  <h1 className={stylesHeading.className} id={id} {...props} ref={ref}>
    {id ? <LinkText href={`#${id}`}>{children}</LinkText> : children}
    {stylesHeading.styles}
  </h1>
))

Heading.displayName = 'Heading'

Heading.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired
}
