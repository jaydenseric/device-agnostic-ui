// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Code from "./Code.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Code` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Code` bundle size.", async () => {
    await assertBundleSize(new URL("./Code.mjs", import.meta.url), 250);
  });

  tests.add("`Code` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Code, null, "Children")
      ),
      new URL("./test/snapshots/Code/without-props.html", import.meta.url)
    );
  });

  tests.add("`Code` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Code,
          { className: "a", id: "b", ["data-c"]: "d" },
          "Children"
        )
      ),
      new URL("./test/snapshots/Code/with-props.html", import.meta.url)
    );
  });
};
