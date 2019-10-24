import PropTypes from 'prop-types'
import React from 'react'
import { stylesLinkText } from '../styles/stylesLinkText'
import { classNameProp } from '../utils/classNameProp'
import { propTypeChildren } from '../utils/propTypeChildren'

export const LinkText = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <a
      className={classNameProp(stylesLinkText.className, className)}
      {...props}
      ref={ref}
    />
    {stylesLinkText.styles}
  </>
))

LinkText.displayName = 'LinkText'

LinkText.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired
}
