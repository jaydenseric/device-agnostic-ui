'use strict';

const css = require('styled-jsx/css');
const stylesHtml = require('./stylesHtml');

const stylesHeading = css.resolve`
  &,
  :global(.${stylesHtml.className} h1),
  :global(.${stylesHtml.className} h2),
  :global(.${stylesHtml.className} h3),
  :global(.${stylesHtml.className} h4),
  :global(.${stylesHtml.className} h5),
  :global(.${stylesHtml.className} h6) {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    max-width: 12em;
    line-height: 0.85;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-rendering: optimizeLegibility;
  }

  :first-child,
  :global(.${stylesHtml.className} h1:first-child),
  :global(.${stylesHtml.className} h2:first-child),
  :global(.${stylesHtml.className} h3:first-child),
  :global(.${stylesHtml.className} h4:first-child),
  :global(.${stylesHtml.className} h5:first-child),
  :global(.${stylesHtml.className} h6:first-child) {
    margin-top: 0;
  }

  :last-child,
  :global(.${stylesHtml.className} h1:last-child),
  :global(.${stylesHtml.className} h2:last-child),
  :global(.${stylesHtml.className} h3:last-child),
  :global(.${stylesHtml.className} h4:last-child),
  :global(.${stylesHtml.className} h5:last-child),
  :global(.${stylesHtml.className} h6:last-child) {
    margin-bottom: 0;
  }
`;

module.exports = stylesHeading;
