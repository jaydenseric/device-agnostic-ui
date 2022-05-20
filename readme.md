![Device Agnostic UI logo](https://cdn.jsdelivr.net/gh/jaydenseric/device-agnostic-ui/device-agnostic-ui-logo.svg)

# Device Agnostic UI

[![npm version](https://badgen.net/npm/v/device-agnostic-ui)](https://npm.im/device-agnostic-ui) [![CI status](https://github.com/jaydenseric/device-agnostic-ui/workflows/CI/badge.svg)](https://github.com/jaydenseric/device-agnostic-ui/actions)

**Device agnostic** styles, components and hooks for [React](https://reactjs.org) and [Next.js](https://nextjs.org) apps — [deviceagnosticui.com](https://deviceagnosticui.com). One design for any viewport (size, orientation, resolution), input method (touch, mouse) or network speed. Simple to build, test and use.

- 📦 **Tiny bundle size.** The minified and gzipped bundle size of individual modules are tested.
- 📱 **Mobile first.** Intuitive layouts suitable for any screen size, _without media queries_.
- ⌨️ **Keyboard ok.** Interactive components have clearly discernable [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) styles.
- 🚨 **Native UI.** Lightweight, pretty and accessible [form field validation](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation) messages.
- 🌗 **Dark mode.** The color scheme [adapts](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) to the operating system’s light or dark mode.
- 🎨 **CSS variables.** Easily tweak the theme globally or in your components.
- 🌏 **Few global styles.** No intrusive normalization or resets; just the [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) essentials.
- 🖌 **Style raw HTML.** Special [`<Html>`](./Html.mjs) component to style rendered Markdown.
- 🧠 **Semantic markup.** Lean use of semantically appropriate HTML elements.
- ⚛️ **Modern React.** Elegant use of [React](https://reactjs.org) [hooks](https://reactjs.org/docs/react-api.html#hooks), [refs](https://reactjs.org/docs/react-api.html#refs) and [fragments](https://reactjs.org/docs/react-api.html#fragments) makes for a great DX.
- ⛑ **Type safety.** Modules are typed via [TypeScript](https://typescriptlang.org) JSDoc comments.

## Installation

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install device-agnostic-ui
```

Theme, global, component, and syntax highlighting styles are [exported](#exports) in vanilla CSS files that must be manually loaded in your app, as necessary.

## Requirements

- [Node.js](https://nodejs.org): `^12.22.0 || ^14.17.0 || >= 16.0.0`
- [Browsers](https://npm.im/browserslist): `> 0.5%, not OperaMini all, not IE > 0, not dead`

## Exports

These ECMAScript modules and CSS files are published to [npm](https://npmjs.com) and exported via the [`package.json`](./package.json) `exports` field:

- [`Blockquote.css`](./Blockquote.css)
- [`Blockquote.mjs`](./Blockquote.mjs)
- [`Button.css`](./Button.css)
- [`Button.mjs`](./Button.mjs)
- [`ButtonSubmit.css`](./ButtonSubmit.css)
- [`ButtonSubmit.mjs`](./ButtonSubmit.mjs)
- [`Code.css`](./Code.css)
- [`Code.mjs`](./Code.mjs)
- [`Fieldset.css`](./Fieldset.css)
- [`Fieldset.mjs`](./Fieldset.mjs)
- [`global.css`](./global.css)
- [`Heading.css`](./Heading.css)
- [`Heading.mjs`](./Heading.mjs)
- [`Html.css`](./Html.css)
- [`Html.mjs`](./Html.mjs)
- [`Icon.css`](./Icon.css)
- [`Icon.mjs`](./Icon.mjs)
- [`IconTick.mjs`](./IconTick.mjs)
- [`LinkActive.mjs`](./LinkActive.mjs)
- [`LinkCard.css`](./LinkCard.css)
- [`LinkCard.mjs`](./LinkCard.mjs)
- [`LinkNav.css`](./LinkNav.css)
- [`LinkNav.mjs`](./LinkNav.mjs)
- [`LinkText.css`](./LinkText.css)
- [`LinkText.mjs`](./LinkText.mjs)
- [`ListOrdered.css`](./ListOrdered.css)
- [`ListOrdered.mjs`](./ListOrdered.mjs)
- [`ListUnordered.css`](./ListUnordered.css)
- [`ListUnordered.mjs`](./ListUnordered.mjs)
- [`Loading.css`](./Loading.css)
- [`Loading.mjs`](./Loading.mjs)
- [`Margin.css`](./Margin.css)
- [`Margin.mjs`](./Margin.mjs)
- [`Nav.css`](./Nav.css)
- [`Nav.mjs`](./Nav.mjs)
- [`package.json`](./package.json)
- [`Para.css`](./Para.css)
- [`Para.mjs`](./Para.mjs)
- [`Picture.css`](./Picture.css)
- [`Picture.mjs`](./Picture.mjs)
- [`Pre.css`](./Pre.css)
- [`Pre.mjs`](./Pre.mjs)
- [`Scroll.css`](./Scroll.css)
- [`Scroll.mjs`](./Scroll.mjs)
- [`Select.css`](./Select.css)
- [`Select.mjs`](./Select.mjs)
- [`splitWordBreaks.mjs`](./splitWordBreaks.mjs)
- [`syntax-highlighting-prism.css`](./syntax-highlighting-prism.css)
- [`Table.css`](./Table.css)
- [`Table.mjs`](./Table.mjs)
- [`Textbox.css`](./Textbox.css)
- [`Textbox.mjs`](./Textbox.mjs)
- [`theme.css`](./theme.css)
- [`Toggle.css`](./Toggle.css)
- [`Toggle.mjs`](./Toggle.mjs)
- [`useCustomValidity.mjs`](./useCustomValidity.mjs)
- [`useMergedRef.mjs`](./useMergedRef.mjs)
- [`useOnFocusReportValidity.mjs`](./useOnFocusReportValidity.mjs)
- [`WordBreaks.mjs`](./WordBreaks.mjs)
