'use strict';

/**
 * A Babel plugin to work around
 * [vercel/styled-jsx#680](https://github.com/vercel/styled-jsx/issues/680). The
 * `styled-jsx/babel` Babel plugin incorrectly inserts code using `import`
 * instead of `require` when the Babel `sourceType` for the file is `script`
 * (CJS). This Babel plugin should be used immediately after the
 * `styled-jsx/babel` Babel plugin, to replace the invalid `import` statements
 * with `require`. This only fixes exactly the problems faced in this project;
 * the `styled-jsx/style` imports are assumed to only have a default named
 * `_JSXStyle`.
 * @param {object} babel Babel context.
 * @returns {object} Babel plugin.
 */
module.exports = function babelPluginStyledJsxHacksAfter(babel) {
  const replacement = babel.template.statement
    .ast`var _JSXStyle = require('styled-jsx/style').default;`;

  return {
    visitor: {
      Program: {
        exit(path) {
          if (path.node.sourceType === 'script')
            path.traverse({
              ImportDeclaration(path) {
                if (
                  path.node.source &&
                  path.node.source.value === 'styled-jsx/style'
                )
                  path.replaceWith(replacement);
              },
            });
        },
      },
    },
  };
};
