// eslint-disable-next-line no-unused-vars
import React from 'react'
import css from 'styled-jsx/css'

export const stylesHtml = css.resolve`
  & :global(h1) {
    font-size: calc(200% + 3vw);
  }

  & :global(h2) {
    font-size: calc(150% + 1.5vw);
  }

  & :global(img) {
    max-width: 100%;
    height: auto;
  }
`
