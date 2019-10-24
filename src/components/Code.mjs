import classNameProp from 'class-name-prop'
import PropTypes from 'prop-types'
import React from 'react'
import { stylesCode } from '../styles/stylesCode'
import { propTypeChildren } from '../utils/propTypeChildren'

export const Code = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <code
      className={classNameProp(stylesCode.className, className)}
      {...props}
      ref={ref}
    />
    {stylesCode.styles}
  </>
))

Code.displayName = 'Code'

Code.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired
}
