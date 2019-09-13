import PropTypes from 'prop-types'
import React from 'react'
import { stylesBlockquote } from '../styles/Blockquote'
import { stylesCode } from '../styles/Code'
import { stylesHeading } from '../styles/Heading'
import { stylesHtml } from '../styles/Html'
import { stylesLinkText } from '../styles/LinkText'
import { stylesList } from '../styles/List'
import { stylesPara } from '../styles/Para'
import { stylesPre } from '../styles/Pre'
import { stylesTable } from '../styles/Table'

export const Html = React.forwardRef(({ children, ...props }, ref) => {
  const childrenProp =
    typeof children === 'string'
      ? { dangerouslySetInnerHTML: { __html: children } }
      : { children }

  return (
    <>
      <div
        className={stylesHtml.className}
        {...childrenProp}
        {...props}
        ref={ref}
      />
      {stylesBlockquote.styles}
      {stylesCode.styles}
      {stylesHeading.styles}
      {stylesHtml.styles}
      {stylesLinkText.styles}
      {stylesList.styles}
      {stylesPara.styles}
      {stylesPre.styles}
      {stylesTable.styles}
    </>
  )
})

Html.displayName = 'Html'

Html.propTypes = {
  children: PropTypes.node.isRequired
}
