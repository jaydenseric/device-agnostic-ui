import classNameProp from 'class-name-prop'
import PropTypes from 'prop-types'
import React from 'react'
import { stylesPre } from '../styles/stylesPre'
import { propTypeChildren } from '../utils/propTypeChildren'

export const Pre = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <pre
      className={classNameProp(stylesPre.className, className)}
      {...props}
      ref={ref}
    />
    {stylesPre.styles}
  </>
))

Pre.displayName = 'Pre'

Pre.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired
}
