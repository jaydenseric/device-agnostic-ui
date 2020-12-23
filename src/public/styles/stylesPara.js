'use strict';

const css = require('styled-jsx/css');
const stylesHtml = require('./stylesHtml');

const stylesPara = css.resolve`
  &,
  :global(.${stylesHtml.className} p) {
    margin-top: 1em;
    margin-bottom: 1em;
    max-width: 30em;
    line-height: var(--daui-line-height);
  }

  :first-child,
  :global(.${stylesHtml.className} p:first-child) {
    margin-top: 0;
  }

  :last-child,
  :global(.${stylesHtml.className} p:last-child) {
    margin-bottom: 0;
  }
`;

module.exports = stylesPara;
