// eslint-disable-next-line no-unused-vars
import React from 'react'
import css from 'styled-jsx/css'
import { stylesHtml } from './stylesHtml'

export const stylesTable = css.resolve`
  &,
  :global(.${stylesHtml.className} table) {
    vertical-align: middle;
    margin-top: 1em;
    margin-bottom: 1em;
    border-collapse: collapse;
    border-style: hidden;
  }

  :first-child,
  :global(.${stylesHtml.className} table:first-child) {
    margin-top: 0;
  }

  :last-child,
  :global(.${stylesHtml.className} table:last-child) {
    margin-bottom: 0;
  }

  & :global(th),
  & :global(td),
  :global(.${stylesHtml.className} table th),
  :global(.${stylesHtml.className} table td) {
    vertical-align: top;
    border: 1px solid
      hsla(
        var(--daui-shade-hue),
        var(--daui-shade-saturation),
        var(--daui-shade-lightness),
        var(--daui-shade-opacity)
      );
    border-left: 0;
    border-right: 0;
    padding: 0.6em;
    text-align: left;
    line-height: var(--daui-line-height);
  }
`
