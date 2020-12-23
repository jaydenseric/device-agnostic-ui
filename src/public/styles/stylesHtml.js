'use strict';

const css = require('styled-jsx/css');

const stylesHtml = css.resolve`
  & :global(h1) {
    font-size: var(--daui-h1-font-size);
  }

  & :global(h2) {
    font-size: var(--daui-h2-font-size);
  }

  & :global(h3) {
    font-size: var(--daui-h3-font-size);
  }

  & :global(h4) {
    font-size: var(--daui-h4-font-size);
  }

  & :global(h5) {
    font-size: var(--daui-h5-font-size);
  }

  & :global(h6) {
    font-size: var(--daui-h6-font-size);
  }

  & :global(img) {
    max-width: 100%;
    height: auto;
  }
`;

module.exports = stylesHtml;