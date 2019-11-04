import classNameProp from 'class-name-prop'
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
import { propTypeChildren } from '../utils/propTypeChildren'

export const Html = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <div
      className={classNameProp(stylesHtml.className, className)}
      {...props}
      ref={ref}
    />
    {stylesBlockquote.styles}
    {stylesCode.styles}
    {stylesHeading.styles}
    {stylesLinkText.styles}
    {stylesList.styles}
    {stylesPara.styles}
    {stylesPre.styles}
    {stylesTable.styles}
    {stylesHtml.styles}
  </>
))

Html.displayName = 'Html'

Html.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired
}
