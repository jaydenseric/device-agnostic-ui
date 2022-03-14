// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Blockquote from "./Blockquote.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Blockquote` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Blockquote` bundle size.", async () => {
    await assertBundleSize(new URL("./Blockquote.mjs", import.meta.url), 300);
  });

  tests.add("`Blockquote` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Blockquote, null, "Children.")
      ),
      new URL("./test/snapshots/Blockquote/without-props.html", import.meta.url)
    );
  });

  tests.add("`Blockquote` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Blockquote,
          { className: "a", id: "b", ["data-c"]: "d" },
          "Children."
        )
      ),
      new URL("./test/snapshots/Blockquote/with-props.html", import.meta.url)
    );
  });
};
