# device-agnostic-ui changelog

## Next

### Major

- Updated dependencies, some of which require newer Node.js versions than were previously supported.
- Updated Node.js support from v8.10+ to `10 - 12 || >= 13.7`.

### Patch

- Stop using [`husky`](https://npm.im/husky) and [`lint-staged`](https://npm.im/lint-staged).
- Ensure GitHub Actions CI runs on pull request.
- Also run GitHub Actions CI with Node.js v13 and v14.
- Simplified the GitHub Actions CI config with the [`npm install-test`](https://docs.npmjs.com/cli/v7/commands/npm-install-test) command.
- Use strict mode for scripts.
- Improved the package `prepare:prettier` and `test:prettier` scripts.
- Reordered the package `test:eslint` script args for consistency with `test:prettier`.
- Configured Prettier option `semi` to the default, `true`.
- Removed `npm-debug.log` from the `.gitignore` file as npm [v4.2.0](https://github.com/npm/npm/releases/tag/v4.2.0)+ doesn’t create it in the current working directory.
- Updated the `.editorconfig` file.

## 5.1.1

### Patch

- Removed peer dependencies from the `ignore` field of `.size-limit.json`, as they are ignored by default.
- Removed the CSS `align-self: stretch` rule from the `LinkCard` component.

## 5.1.0

### Minor

- The color scheme can now be set for specific elements using a `data-daui-color-scheme` attribute with a `light` or `dark` value. This is useful for implementing a global color scheme switch, or to force a legible scheme when UI is overlaying an element known to always be light or dark.
- The `Heading` component has new props:
  - `level` sets the heading element used, e.g. `h1`.
  - `size` sets the CSS `font-size` via a global theme CSS variable, e.g. `--daui-h1-font-size`.

### Patch

- Updated dev dependencies.
- Loosened the semver range for the [`@babel/runtime`](https://npm.im/@babel/runtime) dependency, to avoid duplication in `node_modules` in projects using the oldest supported Next.js version.
- Reduced the opacity of shadows in dark mode.

## 5.0.2

### Patch

- Updated dev dependencies.
- Increased the bundle size limit from 7 KB to 8 KB.
- `Textbox` component `type` prop types now also allow `date`, `datetime-local`, `email`, `month`, `password`, `search`, `tel`, `time`, `url` and `week` values.

## 5.0.1

### Patch

- Updated dependencies.
- Updated `stylesSyntaxHighlightingPrism` styles:
  - Only set the base color on `code` elements (and relevant descendant tokens, as before).
  - Syntax highlight CSS at-rules.

## 5.0.0

### Major

- The `Heading` component’s `h1` element no longer has a default CSS `font-size` rule. All `Heading` uses should have an inline style (or `className`) that sets a `font-size`; using one of the new CSS variables (see below) or a custom value.

### Minor

- Added new CSS variables for global control of heading font sizes, used by the `Heading` and `Html` components:
  1. `--daui-h1-font-size`
  2. `--daui-h2-font-size`
  3. `--daui-h3-font-size`
  4. `--daui-h4-font-size`
  5. `--daui-h5-font-size`
  6. `--daui-h6-font-size`
- `Html` component children `h3`, `h4`, `h5`, and `h6` elements are now styled with specific `font-size` rules via the new CSS variables.

### Patch

- Changelog typo fix.

## 4.0.0

### Major

- `Picture` component changes:
  - An `img` element must now be manually declared via the `children` prop.
  - It can now accept a `dangerouslySetInnerHTML` prop.
  - The `alt`, `src`, and `round` props have been deprecated.
  - The `width` prop no longer sets a CSS pixel `width` value on the `picture` element.

### Minor

- Support `img` elements in the `Html` component, by ensuring they are responsive with `max-width: 100%` and `height: auto` styles.

### Patch

- Updated dev dependencies.
- Tidied `Toggle` component CSS whitespace.
- Set the `Picture` component static and dynamic styles via separate `style` tags for efficiency.
- Reordered `Html` component styles so that the `stylesHtml` CSS comes last, indicating higher specificity.

## 3.0.1

### Patch

- Updated the `--daui-sans-serif` and `-daui-emoji` CSS variable font stacks defined in `stylesGlobalTheme`, for cross-device consistency. They are now similar to the GitHub font stacks.
- Changelog typo fix.

## 3.0.0

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
- Added a new optional `active` prop for the `LinkText` component, for displaying active state.

### Patch

- Updated dev dependencies.
- Updated the package `homepage` field.
- The `Button` component’s `button` element’s styles now inherits `font-variant`.
- Added `scrollbar-width: thin` styles to `Nav` and `Pre` components.
- Updated `LinkNav` and `Nav` component styles:
  - The content of links now vertically aligns to the bottom.
  - More compact spacing to fit more links into a narrow viewport.
  - `Nav` horizontal inner spacing uses the `--daui-spacing` CSS variable, and no longer has extra spacing on the right.
- Updated the `Scroll` component to use a single `div` element and removed the `max-width: 100%` style.
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
