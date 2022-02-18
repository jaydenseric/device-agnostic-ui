// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import assertBundleSize from "./test/assertBundleSize.mjs";
import WordBreaks from "./WordBreaks.mjs";

/**
 * Adds `WordBreaks` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`WordBreaks` bundle size.", async () => {
    await assertBundleSize(new URL("./WordBreaks.mjs", import.meta.url), 350);
  });

  tests.add("`WordBreaks` with minimal props, word breaks.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(WordBreaks, { text: "learnHTML5WithUs" })
      ),
      new URL(
        "./test/snapshots/WordBreaks/minimal-props-word-breaks.html",
        import.meta.url
      )
    );
  });

  tests.add("`WordBreaks` with minimal props, no word breaks.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(WordBreaks, { text: "learn HTML 5 With Us" })
      ),
      new URL(
        "./test/snapshots/WordBreaks/minimal-props-no-word-breaks.html",
        import.meta.url
      )
    );
  });

  tests.add("`WordBreaks` with props, word breaks.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(WordBreaks, {
          placeholder: "__word_break__",
          text: "learnHTML5WithUs",
        })
      ),
      new URL(
        "./test/snapshots/WordBreaks/with-props-word-breaks.html",
        import.meta.url
      )
    );
  });

  tests.add("`WordBreaks` with props, no word breaks.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(WordBreaks, {
          placeholder: "__word_break__",
          text: "learn HTML 5 With Us",
        })
      ),
      new URL(
        "./test/snapshots/WordBreaks/with-props-no-word-breaks.html",
        import.meta.url
      )
    );
  });
};
