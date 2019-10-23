import css from 'styled-jsx/css'

export const stylesGlobalTheme = css.global`
  :root {
    --daui-foreground-hue: 0;
    --daui-foreground-saturation: 0%;
    --daui-foreground-lightness: 0%;
    --daui-background-hue: 0;
    --daui-background-saturation: 0%;
    --daui-background-lightness: 100%;
    --daui-shade-hue: 0;
    --daui-shade-saturation: 0%;
    --daui-shade-lightness: 0%;
    --daui-shade-opacity: 0.08;
    --daui-shadow-opacity: 0.12;
    --daui-highlight-hue: 72;
    --daui-highlight-saturation: 100%;
    --daui-highlight-lightness: 60%;
    --daui-highlight-opacity: 0.75;
    --daui-interact-hue: 207;
    --daui-interact-saturation: 100%;
    --daui-interact-lightness: 38%;
    --daui-error-hue: 339;
    --daui-error-saturation: 100%;
    --daui-error-lightness: 50%;
    --daui-sans-serif: -apple-system, BlinkMacSystemFont, sans-serif;
    --daui-monospace: SFMono-Regular, Consolas, Liberation Mono, Menlo,
      monospace;
    --daui-emoji: emoji, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    --daui-line-height: 1.3;

    /* Enable both light and dark browser color schemes.
     * See: https://drafts.csswg.org/css-color-adjust-1/#color-scheme-prop
     */
    color-scheme: light dark;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --daui-foreground-lightness: 78%;
      --daui-background-lightness: 18%;
      --daui-shade-opacity: 0.2;
      --daui-shadow-opacity: 0.55;
      --daui-highlight-opacity: 0.3;
      --daui-interact-saturation: 90%;
      --daui-interact-lightness: 62%;
    }
  }
`