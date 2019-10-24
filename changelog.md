# device-agnostic-ui changelog

## Next

### Major

- The `Html` component no longer renders a string value for the `children` prop with `dangerouslySetInnerHTML`. Instead, use the `dangerouslySetInnerHTML` prop directly.

### Minor

- Added the `stylesSyntaxHighlightingPrism` named export, for styling syntax highlighting HTML produced by [Prism](https://prismjs.com).
- Added the `propTypeChildren` named export, for use in component `propTypes` to specify a prop (usually, but not necessarily `children`) should have a React node type, and if `.isRequired` is chained, must be populated unless the `dangerouslySetInnerHTML` prop is populated.
- `Blockquote`, `Button`, `Code`, `Heading`, `Html`, `LinkCard`, `LinkNav`, `LinkText`, `List`, `Nav`, `Para`, `Pre`, `Select`, and `Table` components can now accept a `dangerouslySetInnerHTML` prop.
- Additional `Nav` component props are now applied to the underlying `nav` element.

### Patch

- Updated dependencies.
- Reorganized the files in `src/styles` so that filenames match their named export.
- Alphabetically sort exports in index files.
- Fixed setting a `className` prop on `LinkCard` and `LinkNav` components from interfering with the `active` class.
- The `children` prop of the `Nav` and `Table` components is now marked as required in `propTypes`.
- In many components, use the new `propTypeChildren` API.
- In many components, use `classNameProp` from [`class-name-prop`](https://npm.im/class-name-prop) for creating a `className` prop value for multiple classes.

## 1.0.1

### Patch

- Updated dependencies.
- Fixed `<Nav>` and `<Pre>` component `:focus` styles.
- Only display `<Nav>`, `<Pre>` and `<Scroll>` component scroll hint shadows in browsers that support [`overscroll-behavior-x: contain`](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#Browser_compatibility) (as they look bad when overscrolled) and not [`-webkit-overflow-scrolling: touch`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling#Browser_compatibility) (due to [a WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=181048)). This affects mostly Safari desktop and iOS.
- Use Use `rem` units for scroll shadow styles.
- Removed `package-lock.json` from `.gitignore` and `.prettierignore`, as it’s disabled in `.npmrc` anyway.

## 1.0.0

Initial release.
