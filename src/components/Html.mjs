import PropTypes from 'prop-types'
import React from 'react'
import { stylesBlockquote } from '../styles/stylesBlockquote'
import { stylesCode } from '../styles/stylesCode'
import { stylesHeading } from '../styles/stylesHeading'
import { stylesHtml } from '../styles/stylesHtml'
import { stylesLinkText } from '../styles/stylesLinkText'
import { stylesList } from '../styles/stylesList'
import { stylesPara } from '../styles/stylesPara'
import { stylesPre } from '../styles/stylesPre'
import { stylesTable } from '../styles/stylesTable'

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
