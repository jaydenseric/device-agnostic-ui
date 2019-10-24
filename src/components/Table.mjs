import classNameProp from 'class-name-prop'
import PropTypes from 'prop-types'
import React from 'react'
import { stylesTable } from '../styles/stylesTable'
import { propTypeChildren } from '../utils/propTypeChildren'

export const Table = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <table
      className={classNameProp(stylesTable.className, className)}
      {...props}
      ref={ref}
    />
    {stylesTable.styles}
  </>
))

Table.displayName = 'Table'

Table.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired
}
