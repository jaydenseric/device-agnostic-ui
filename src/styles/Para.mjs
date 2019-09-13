// eslint-disable-next-line no-unused-vars
import React from 'react'
import css from 'styled-jsx/css'
import { stylesHtml } from './Html'

export const stylesPara = css.resolve`
  &,
  :global(.${stylesHtml.className} p) {
    margin-top: 1em;
    margin-bottom: 1em;
    max-width: 30em;
    line-height: var(--daui-line-height);
    font-size: 1.1rem;
  }

  :first-child,
  :global(.${stylesHtml.className} p:first-child) {
    margin-top: 0;
  }

  :last-child,
  :global(.${stylesHtml.className} p:last-child) {
    margin-bottom: 0;
  }
`
