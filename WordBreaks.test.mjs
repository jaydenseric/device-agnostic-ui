import { strictEqual } from "assert";
import React from "react";
import ReactDOMServer from "react-dom/server.js";

import assertBundleSize from "./test/assertBundleSize.mjs";
import WordBreaks from "./WordBreaks.mjs";

export default (tests) => {
  tests.add("`WordBreaks` bundle size.", async () => {
    await assertBundleSize(new URL("./WordBreaks.mjs", import.meta.url), 350);
  });

  tests.add("`WordBreaks` with work breaks.", () => {
    strictEqual(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(WordBreaks, null, "learnHTML5WithUs")
      ),
      "learn<wbr/>HTML<wbr/>5<wbr/>With<wbr/>Us"
    );
  });

  tests.add("`WordBreaks` without word breaks.", () => {
    const string = "learn HTML 5 With Us";

    strictEqual(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(WordBreaks, null, string)
      ),
      string
    );
  });
};
