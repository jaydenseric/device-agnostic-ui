import PropTypes from 'prop-types'
import React from 'react'
import { stylesBlockquote } from '../styles/stylesBlockquote'
import { classNameProp } from '../utils/classNameProp'
import { propTypeChildren } from '../utils/propTypeChildren'

export const Blockquote = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <blockquote
      className={classNameProp(stylesBlockquote.className, className)}
      {...props}
      ref={ref}
    />
    {stylesBlockquote.styles}
  </>
))

Blockquote.displayName = 'Blockquote'

Blockquote.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired
}
