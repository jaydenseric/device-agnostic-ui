'use strict';

const css = require('styled-jsx/css');
const stylesHtml = require('./stylesHtml');

const stylesLinkText = css.resolve`
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
  .active,
  :global(.${stylesHtml.className} a:focus),
  :global(.${stylesHtml.className} a.active) {
    box-shadow: 0 2px;
  }

  :focus,
  :global(.${stylesHtml.className} a:focus) {
    color: hsl(
      var(--daui-interact-hue),
      var(--daui-interact-saturation),
      calc(var(--daui-interact-lightness) + 10%)
    );
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
`;

module.exports = stylesLinkText;
