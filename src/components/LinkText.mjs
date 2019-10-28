import classNameProp from 'class-name-prop'
import PropTypes from 'prop-types'
import React from 'react'
import { stylesLinkText } from '../styles/stylesLinkText'
import { propTypeChildren } from '../utils/propTypeChildren'

export const LinkText = React.forwardRef(
  ({ active, className, ...props }, ref) => (
    <>
      <a
        className={classNameProp(
          stylesLinkText.className,
          className,
          active && 'active'
        )}
        {...props}
        ref={ref}
      />
      {stylesLinkText.styles}
    </>
  )
)

LinkText.displayName = 'LinkText'

LinkText.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: propTypeChildren.isRequired
}
