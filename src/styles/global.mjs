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

export const stylesGlobal = css.global`
  :root {
    color: hsl(
      var(--daui-foreground-hue),
      var(--daui-foreground-saturation),
      var(--daui-foreground-lightness)
    );
    background-color: hsl(
      var(--daui-background-hue),
      var(--daui-background-saturation),
      var(--daui-background-lightness)
    );

    /* Use a native looking, zero load-time local font for text and emoji. */
    font-family: var(--daui-sans-serif), var(--daui-emoji);

    /* Normalize font rendering across devices and browsers. Most fonts are not
     * designed for subpixel anti-aliasing and look too thick. This also avoids
     * ugly flickering as browsers transition to the simpler font smoothing when
     * animating or transitioning elements.
     */
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    /* Prevent some mobile browsers from inflating the text size. */
    text-size-adjust: none;

    /* Allow long words to break that would otherwise overflow their container.
     * Because page horizontal scroll is disabled via other rules, this ensures
     * such content can still be viewed.
     */
    overflow-wrap: break-word;

    /* Prevent certain touch browsers from adding a highlight effect to active
     * interactive elements.
     */
    -webkit-tap-highlight-color: transparent;

    /* Enable panning and pinch zoom gestures, but disable additional
     * non-standard gestures such as double-tap to zoom. Disabling double-tap to
     * zoom removes the need for browsers to delay the generation of click
     * events when the user taps the screen.
     */
    touch-action: manipulation;
  }

  :root,
  body {
    /* Prevent CSS animations, transforms, etc. that overflow the viewport from
     * causing page horizontal scroll.
     */
    overflow-x: hidden;
  }

  body {
    /* Remove default page margins. Components should be able to occupy the full
     * viewport area.
     */
    margin: 0;

    /* Establish the narrowest supported viewport. This prevents a crushed
     * layout when the viewport is narrower (e.g. the inspector is open in a
     * narrow window).
     */
    min-width: 320px;

    /* Ensure short page bottom overflow (e.g. the low parts of “g” and “y”
     * characters) doesn’t appear cropped, due to the overflow-x: hidden rule
     * also causing overflow-y to crop.
     */
    min-height: 100vh;
  }

  ::selection {
    background-color: hsla(
      var(--daui-highlight-hue),
      var(--daui-highlight-saturation),
      var(--daui-highlight-lightness),
      var(--daui-highlight-opacity)
    );
  }
`
