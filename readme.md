![Device Agnostic UI logo](https://cdn.jsdelivr.net/gh/jaydenseric/device-agnostic-ui/device-agnostic-ui-logo.svg)

# Device Agnostic UI

[![npm version](https://badgen.net/npm/v/device-agnostic-ui)](https://npm.im/device-agnostic-ui) [![CI status](https://github.com/jaydenseric/device-agnostic-ui/workflows/CI/badge.svg)](https://github.com/jaydenseric/device-agnostic-ui/actions)

**Device agnostic** [styles](https://deviceagnosticui.com/styles), [components](https://deviceagnosticui.com/components) and [hooks](https://deviceagnosticui.com/hooks) for [React](https://reactjs.org) and [Next.js](https://nextjs.org) apps — [deviceagnosticui.com](https://deviceagnosticui.com). One design for any viewport (size, orientation, resolution), input method (touch, mouse) or network speed. Simple to build, test and use.

- 📦 **Tiny bundle size.** JS tested to be [< 4.5 kB](https://bundlephobia.com/result?p=device-agnostic-ui) minified and gzipped, _before_ [tree shaking](https://webpack.js.org/guides/tree-shaking).
- 📱 **Mobile first.** Intuitive layouts suitable for any screen size, _without media queries_.
- ⌨️ **Keyboard ok.** Interactive components have clearly discernable [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) styles.
- 🚨 **Native UI.** Lightweight, pretty and accessible [form field validation](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation) messages.
- 🌗 **Dark mode.** The color scheme [adapts](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) to the operating system’s light or dark mode.
- 🎨 **CSS variables.** Easily tweak the theme globally or in your components.
- 🌏 **Few global styles.** No intrusive normalization or resets; just the [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) essentials.
- 🖌 **Style raw HTML.** Special [`<Html>`](https://deviceagnosticui.com/components/Html) component to style rendered markdown.
- 🧠 **Semantic markup.** Lean use of semantically appropriate HTML elements.
- ⚛️ **Modern React.** Elegant use of [React](https://reactjs.org) [hooks](https://reactjs.org/docs/react-api.html#hooks), [refs](https://reactjs.org/docs/react-api.html#refs) and [fragments](https://reactjs.org/docs/react-api.html#fragments) makes for a great DX.

## Setup

To install from [npm](https://npmjs.com) run:

```sh
npm install device-agnostic-ui
```

Then load the [styles](https://deviceagnosticui.com/styles).

## API

- [Styles](https://deviceagnosticui.com/styles)
- [Components](https://deviceagnosticui.com/components)
- [Hooks](https://deviceagnosticui.com/hooks)

## Support

- [Node.js](https://nodejs.org): `^12.20 || >= 14.13`
- [Browsers](https://npm.im/browserslist): `> 0.5%, not OperaMini all, not IE > 0, not dead`
