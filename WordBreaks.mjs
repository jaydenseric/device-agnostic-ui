// @ts-check

import React from "react";

import splitWordBreaks from "./splitWordBreaks.mjs";

/**
 * A React component to display text with
 * [`<wbr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)
 * elements inserted at at aesthetically pleasing word break opportunities
 * identified by {@linkcode splitWordBreaks}, that don’t appear in the clipboard
 * when the text is copied.
 *
 * Useful for narrow headings that contain long camel or pascal cased text that
 * would otherwise overflow the container.
 * @param {object} props Props.
 * @param {string} props.text Text.
 * @param {string} [props.placeholder] A temporary placeholder that hopefully
 *   doesn’t occur in the input string. Defaults to `"<wbr />"`.
 */
export default function WordBreaks({ text, placeholder }) {
  const split = React.useMemo(
    () => splitWordBreaks(text, placeholder),
    [placeholder, text]
  );

  // This fragment is a workaround for React types incorrectly forbidding a
  // functional component from returning an array or string.
  return React.createElement(
    React.Fragment,
    null,
    split.length > 1
      ? split.map((part, index) =>
          React.createElement(
            React.Fragment,
            { key: index },
            !!index && React.createElement("wbr"),
            part
          )
        )
      : text
  );
}
