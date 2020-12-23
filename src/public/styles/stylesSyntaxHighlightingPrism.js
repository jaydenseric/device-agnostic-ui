'use strict';

const css = require('styled-jsx/css');

const stylesSyntaxHighlightingPrism = css.resolve`
  code,
  & :global(code),
  & :global(.token.plain-text),
  & :global(.token.content),
  & :global(.token.attr-value),
  & :global(.token.string) {
    color: hsla(
      var(--daui-foreground-hue),
      var(--daui-foreground-saturation),
      var(--daui-foreground-lightness),
      0.8
    );
  }

  & :global(.token.comment) {
    font-style: italic;
    color: hsla(
      var(--daui-foreground-hue),
      var(--daui-foreground-saturation),
      var(--daui-foreground-lightness),
      0.35
    );
  }

  & :global(.token.operator),
  & :global(.token.punctuation),
  & :global(.token.template-punctuation),
  & :global(.token.interpolation-punctuation) {
    color: hsla(
      var(--daui-foreground-hue),
      var(--daui-foreground-saturation),
      var(--daui-foreground-lightness),
      0.45
    );
  }

  & :global(.token.url),
  & :global(.token.selector) {
    color: hsl(
      var(--daui-interact-hue),
      var(--daui-interact-saturation),
      var(--daui-interact-lightness)
    );
  }

  & :global(.token.boolean),
  & :global(.token.number) {
    color: hsl(280, 100%, 65%);
  }

  & :global(.token.attr-name),
  & :global(.token.property) {
    color: hsl(10, 100%, 60%);
  }

  & :global(.token.class-name),
  & :global(.token.function),
  & :global(.token.tag > .tag) {
    color: hsl(148, 100%, 23%);
  }

  & :global(.token.keyword),
  & :global(.token.atrule > .rule) {
    color: hsl(339, 100%, 50%);
  }

  & :global(.token.important) {
    font-weight: bold;
  }

  @media (prefers-color-scheme: dark) {
    & :global(.token.class-name),
    & :global(.token.function),
    & :global(.token.tag > .tag) {
      color: hsl(148, 100%, 32%);
    }
  }
`;

module.exports = stylesSyntaxHighlightingPrism;
