import PropTypes from 'prop-types'
import React from 'react'
import { splitWordBreaks } from '../utils/splitWordBreaks'

export const WordBreaks = ({ placeholder, children }) => {
  const split = React.useMemo(() => splitWordBreaks(children, placeholder), [
    children,
    placeholder
  ])

  return split.length
    ? split.map((part, index) => (
        <React.Fragment key={index}>
          {!!index && <wbr />}
          {part}
        </React.Fragment>
      ))
    : children
}

WordBreaks.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.string.isRequired
}
