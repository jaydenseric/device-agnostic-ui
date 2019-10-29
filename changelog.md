# device-agnostic-ui changelog

## Next

### Major

- Updated the minimum supported Node.js version from v8.5 to v8.10, to match ESLint’s level of support.
- Renamed several CSS variables, so that prefixes match the capitalization of the component name:
  - `--daui-nav-` → `--daui-Nav-`
  - `--daui-scroll-` → `--daui-Scroll-`
  - `--daui-pre-` → `--daui-Pre-`
- New font size approach:
  - `Blockquote`, `List`, and `Para` components now inherit font size.
  - `Heading`, `Select` and `Textbox` components now use `%` instead of `rem` for font size units.

### Minor

- Added a new `splitWordBreaks` utility function and `WordBreaks` component, for rendering text with aesthetically pleasing word break opportunities.
- Added a new `--daui-spacing` CSS variable, for global control of spacing between elements that are intended to visually align.
- Added a new `Margin` component that wraps children in a `div` element, with a margin set via the `--daui-spacing` CSS variable.
- Added a new optional `active` props for the `LinkText` component, for displaying active state.

### Patch

- Updated dev dependencies.
- The `Button` component’s `button` element’s styles now inherits `font-variant`.
- Reordered `Fieldset` component style rules for consistency with other components.

## 2.0.1

### Patch

- Ensure the `Picture` component maintains aspect ratio when an inline style width is applied. Also, CSS `calc` is used instead of JS math so precision matches the browser’s capability, and for better inspectability.

## 2.0.0

### Major

- The `Html` component no longer renders a string value for the `children` prop with `dangerouslySetInnerHTML`. Instead, use the `dangerouslySetInnerHTML` prop directly.

### Minor

- Added the `stylesSyntaxHighlightingPrism` named export, for styling syntax highlighting HTML produced by [Prism](https://prismjs.com).
- Added the `propTypeChildren` named export, for use in component `propTypes` to specify a prop (usually, but not necessarily `children`) should have a React node type, and if `.isRequired` is chained, must be populated unless the `dangerouslySetInnerHTML` prop is populated.
- `Blockquote`, `Button`, `Code`, `Html`, `LinkCard`, `LinkNav`, `LinkText`, `List`, `Nav`, `Para`, `Pre`, `Select`, and `Table` components can now accept a `dangerouslySetInnerHTML` prop.
- Additional `Nav` component props are now applied to the underlying `nav` element.

### Patch

- Updated dependencies.
- Reorganized the files in `src/styles` so that filenames match their named export.
- Alphabetically sort exports in index files.
- Fixed setting a `className` prop on `LinkCard` and `LinkNav` components from interfering with the `active` class.
- The `children` prop of the `Nav` and `Table` components is now marked as required in `propTypes`.
- In many components, use the new `propTypeChildren` API.
- In many components, use `classNameProp` from [`class-name-prop`](https://npm.im/class-name-prop) for creating a `className` prop value for multiple classes.
- Improved the readme with [deviceagnosticui.com](https://deviceagnosticui.com) links, an expanded intro with a list of features, better setup instructions, and a new “API” section.

## 1.0.1

### Patch

- Updated dependencies.
- Fixed `<Nav>` and `<Pre>` component `:focus` styles.
- Only display `<Nav>`, `<Pre>` and `<Scroll>` component scroll hint shadows in browsers that support [`overscroll-behavior-x: contain`](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#Browser_compatibility) (as they look bad when overscrolled) and not [`-webkit-overflow-scrolling: touch`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling#Browser_compatibility) (due to [a WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=181048)). This affects mostly Safari desktop and iOS.
- Use Use `rem` units for scroll shadow styles.
- Removed `package-lock.json` from `.gitignore` and `.prettierignore`, as it’s disabled in `.npmrc` anyway.

## 1.0.0

Initial release.
