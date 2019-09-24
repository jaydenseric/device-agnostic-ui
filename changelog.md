# device-agnostic-ui changelog

## 1.0.1

### Patch

- Updated dependencies.
- Fixed `<Nav>` and `<Pre>` component `:focus` styles.
- Only display `<Nav>`, `<Pre>` and `<Scroll>` component scroll hint shadows in browsers that support [`overscroll-behavior-x: contain`](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#Browser_compatibility) (as they look bad when overscrolled) and not [`-webkit-overflow-scrolling: touch`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling#Browser_compatibility) (due to [a WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=181048)). This affects mostly Safari desktop and iOS.
- Use Use `rem` units for scroll shadow styles.
- Removed `package-lock.json` from `.gitignore` and `.prettierignore`, as it’s disabled in `.npmrc` anyway.

## 1.0.0

Initial release.
