'use strict';

/**
 * A Babel plugin to work around
 * [vercel/styled-jsx#689](https://github.com/vercel/styled-jsx/issues/689). The
 * `styled-jsx/babel` Babel plugin incorrectly only processes `styled-jsx/css`
 * `import` statements, and not `require` expressions. This Babel plugin should
 * be used immediately before the `styled-jsx/babel` Babel plugin, to convert
 * the `require` expressions to `import` statements. This only fixes exactly the
 * problems faced in this project; it’s assumed that the `styled-jsx/css`
 * `require` expressions only create a `css` variable.
 * @param {object} babel Babel context.
 * @returns {object} Babel plugin.
 */
module.exports = function babelPluginStyledJsxHacksBefore(babel) {
  const replacement = babel.template.statement
    .ast`import css from 'styled-jsx/css';`;

  return {
    visitor: {
      Program: {
        enter(path) {
          if (path.node.sourceType === 'script')
            // Traversal has to be done on `Program` enter to race the weird way
            // `styled-jsx` traverses.
            path.traverse({
              CallExpression(path) {
                if (path.node.callee.name === 'require') {
                  const [specifier] = path.node.arguments;
                  if (
                    specifier &&
                    specifier.type === 'StringLiteral' &&
                    specifier.value === 'styled-jsx/css'
                  )
                    path.getStatementParent().replaceWith(replacement);
                }
              },
            });
        },
      },
    },
  };
};
