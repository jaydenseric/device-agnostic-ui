'use strict';

const css = require('styled-jsx/css');
const stylesHtml = require('./stylesHtml');

const stylesCode = css.resolve`
  &,
  :global(.${stylesHtml.className} code) {
    border-radius: 1em;
    padding: 0.125em 0.5em;
    font-size: 85%;
    font-family: var(--daui-monospace);
    background-color: hsla(
      var(--daui-shade-hue),
      var(--daui-shade-saturation),
      var(--daui-shade-lightness),
      var(--daui-shade-opacity)
    );
  }
`;

module.exports = stylesCode;
