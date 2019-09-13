// eslint-disable-next-line no-unused-vars
import React from 'react'
import css from 'styled-jsx/css'
import { stylesHtml } from './Html'

export const stylesLinkText = css.resolve`
  &,
  :global(.${stylesHtml.className} a) {
    text-decoration: none;
    color: hsl(
      var(--daui-interact-hue),
      var(--daui-interact-saturation),
      var(--daui-interact-lightness)
    );
  }

  :focus,
  :global(.${stylesHtml.className} a:focus) {
    color: hsl(
      var(--daui-interact-hue),
      var(--daui-interact-saturation),
      calc(var(--daui-interact-lightness) + 10%)
    );
    box-shadow: 0 2px;
    outline: 0;
  }

  :active,
  :global(.${stylesHtml.className} a:active) {
    color: hsl(
      var(--daui-interact-hue),
      var(--daui-interact-saturation),
      calc(var(--daui-interact-lightness) + 20%)
    );
  }
`
