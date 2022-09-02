![Device Agnostic UI logo](https://cdn.jsdelivr.net/gh/jaydenseric/device-agnostic-ui/device-agnostic-ui-logo.svg)

# Device Agnostic UI

**Device agnostic** styles, components and hooks for [React](https://reactjs.org) apps — [deviceagnosticui.com](https://deviceagnosticui.com). One design for any viewport (size, orientation, resolution), input method (touch, mouse) or network speed. Simple to build, test and use.

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

For [Node.js](https://nodejs.org), to install [`device-agnostic-ui`](https://npm.im/device-agnostic-ui) and its [`react`](https://npm.im/react) peer dependency with [npm](https://npmjs.com/get-npm), run:

```sh
npm install device-agnostic-ui react
```

For [Deno](https://deno.land) and browsers, an example import map:

```json
{
  "imports": {
    "class-name-prop": "https://unpkg.com/class-name-prop@6.0.0/classNameProp.mjs",
    "device-agnostic-ui/": "https://unpkg.com/device-agnostic-ui@11.0.0/",
    "react": "https://esm.sh/react@18.2.0"
  }
}
```

These dependencies might not need to be in the import map, depending on what [`device-agnostic-ui`](https://npm.im/device-agnostic-ui) modules the project imports from:

- [`class-name-prop`](https://npm.im/class-name-prop)

Theme, global, component, and syntax highlighting styles are [exported](#exports) in vanilla CSS files that must be manually loaded in your app, as necessary.

## Requirements

Supported runtime environments:

- [Node.js](https://nodejs.org) versions `^14.17.0 || ^16.0.0 || >= 18.0.0`.
- [Deno](https://deno.land).
- Browsers matching the [Browserslist](https://browsersl.ist) query [`> 0.5%, not OperaMini all, not dead`](https://browsersl.ist/?q=%3E+0.5%25%2C+not+OperaMini+all%2C+not+dead).

Non [Deno](https://deno.land) projects must configure [TypeScript](https://typescriptlang.org) to use types from the ECMAScript modules that have a `// @ts-check` comment:

- [`compilerOptions.allowJs`](https://typescriptlang.org/tsconfig#allowJs) should be `true`.
- [`compilerOptions.maxNodeModuleJsDepth`](https://typescriptlang.org/tsconfig#maxNodeModuleJsDepth) should be reasonably large, e.g. `10`.
- [`compilerOptions.module`](https://typescriptlang.org/tsconfig#module) should be `"node16"` or `"nodenext"`.

## Exports

The [npm](https://npmjs.com) package [`device-agnostic-ui`](https://npm.im/device-agnostic-ui) features [optimal JavaScript module design](https://jaydenseric.com/blog/optimal-javascript-module-design). It doesn’t have a main index module, so use deep imports from the ECMAScript modules that are exported. These ECMAScript modules and CSS files are exported via the [`package.json`](./package.json) field [`exports`](https://nodejs.org/api/packages.html#exports):

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
