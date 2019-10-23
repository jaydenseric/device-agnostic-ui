// eslint-disable-next-line no-unused-vars
import React from 'react'
import css from 'styled-jsx/css'
import { stylesHtml } from './stylesHtml'

export const stylesList = css.resolve`
  &,
  :global(.${stylesHtml.className} ul),
  :global(.${stylesHtml.className} ol) {
    margin-top: 1em;
    margin-bottom: 1.5em;
    padding-left: 2em;
    font-size: 1.1rem;
  }

  :first-child,
  :global(.${stylesHtml.className} ul:first-child),
  :global(.${stylesHtml.className} ol:first-child) {
    margin-top: 0;
  }

  :last-child,
  :global(.${stylesHtml.className} ul:last-child),
  :global(.${stylesHtml.className} ol:last-child) {
    margin-bottom: 0;
  }

  & > :global(li),
  :global(.${stylesHtml.className} ul > li),
  :global(.${stylesHtml.className} ol > li) {
    margin: 0.5em 0;
    max-width: 30em;
    line-height: var(--daui-line-height);
  }

  & > :global(li):first-child,
  :global(.${stylesHtml.className} ul > li:first-child),
  :global(.${stylesHtml.className} ul > li:first-child) {
    margin-top: 0;
  }

  & > :global(li):last-child,
  :global(.${stylesHtml.className} ul > li:last-child),
  :global(.${stylesHtml.className} ol > li:last-child) {
    margin-bottom: 0;
  }
`