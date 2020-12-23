'use strict';

const css = require('styled-jsx/css');
const stylesCode = require('./stylesCode');
const stylesHtml = require('./stylesHtml');

const SCROLL_SHADOW_WIDTH = '1rem';
const SCROLL_FADE_WIDTH = '4rem';

const stylesPre = css.resolve`
  &,
  :global(.${stylesHtml.className} pre) {
    --daui-Pre-background-lightness: calc(
      var(--daui-background-lightness) - 4%
    );
    --daui-Pre-background-opaque: hsl(
      var(--daui-background-hue),
      var(--daui-background-saturation),
      var(--daui-Pre-background-lightness)
    );

    margin-top: 1em;
    margin-bottom: 1em;
    border-radius: 0.75em;
    box-sizing: border-box;
    width: fit-content;
    max-width: 100%;
    padding: 1em;
    text-align: left;
    line-height: var(--daui-line-height);
    background-color: var(--daui-Pre-background-opaque);
    overflow-wrap: normal;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    -webkit-overflow-scrolling: touch;
  }

  @supports (overscroll-behavior-x: contain) and
    (not (-webkit-overflow-scrolling: touch)) {
    &,
    :global(.${stylesHtml.className} pre) {
      --daui-Pre-background-transparent: hsla(
        var(--daui-background-hue),
        var(--daui-background-saturation),
        var(--daui-Pre-background-lightness),
        0
      );

      background-image: linear-gradient(
          90deg,
          var(--daui-Pre-background-opaque),
          var(--daui-Pre-background-transparent) ${SCROLL_FADE_WIDTH},
          var(--daui-Pre-background-transparent)
            calc(100% - ${SCROLL_FADE_WIDTH}),
          var(--daui-Pre-background-opaque)
        ),
        radial-gradient(
          ${SCROLL_SHADOW_WIDTH} 50% at left center,
          hsla(0, 0%, 0%, var(--daui-shadow-opacity)),
          hsla(0, 0%, 0%, 0)
        ),
        radial-gradient(
          ${SCROLL_SHADOW_WIDTH} 50% at right center,
          hsla(0, 0%, 0%, var(--daui-shadow-opacity)),
          hsla(0, 0%, 0%, 0)
        );
      background-attachment: local, scroll, scroll;
    }
  }

  :first-child,
  :global(.${stylesHtml.className} pre:first-child) {
    margin-top: 0;
  }

  :last-child,
  :global(.${stylesHtml.className} pre:last-child) {
    margin-bottom: 0;
  }

  /* Some browsers (e.g. Firefox) make scrollable elements focusable. */
  :focus,
  :global(.${stylesHtml.className} pre:focus) {
    --daui-Pre-background-lightness: calc(
      var(--daui-background-lightness) - 8%
    );

    outline: 0;
  }

  & > :global(code.${stylesCode.className}),
  :global(.${stylesHtml.className} pre > code) {
    padding: 0;
    background-color: transparent;
  }
`;

module.exports = stylesPre;
