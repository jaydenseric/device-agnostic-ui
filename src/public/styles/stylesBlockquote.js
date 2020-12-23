'use strict';

const css = require('styled-jsx/css');
const stylesHtml = require('./stylesHtml');

const stylesBlockquote = css.resolve`
  &,
  :global(.${stylesHtml.className} blockquote) {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    margin-left: 1.5em;
    max-width: 22em;
    line-height: var(--daui-line-height);
    font-style: italic;
    font-weight: 300;
    text-rendering: optimizeLegibility;
  }

  :first-child,
  :global(.${stylesHtml.className}:first-child) {
    margin-top: 0;
  }

  :last-child,
  :global(.${stylesHtml.className}:last-child) {
    margin-bottom: 0;
  }
`;

module.exports = stylesBlockquote;
