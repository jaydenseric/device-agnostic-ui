import PropTypes from 'prop-types'
import React from 'react'
import { stylesTable } from '../styles/Table'

export const Table = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <table
      className={`${stylesTable.className}${className ? ` ${className}` : ''}`}
      {...props}
      ref={ref}
    >
      {children}
      {stylesTable.styles}
    </table>
  )
)

Table.displayName = 'Table'

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
