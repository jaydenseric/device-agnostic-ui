// eslint-disable-next-line no-unused-vars
import React from 'react'
import css from 'styled-jsx/css'

export const stylesHtml = css.resolve`
  & :global(h1) {
    font-size: calc(2rem + 3vw);
  }

  & :global(h2) {
    font-size: calc(1.5rem + 1.5vw);
  }
`
