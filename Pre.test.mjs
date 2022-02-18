// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Pre from "./Pre.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Pre` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Pre` bundle size.", async () => {
    await assertBundleSize(new URL("./Pre.mjs", import.meta.url), 250);
  });

  tests.add("`Pre` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Pre, null, "Children.")
      ),
      new URL("./test/snapshots/Pre/without-props.html", import.meta.url)
    );
  });

  tests.add("`Pre` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Pre,
          { className: "a", id: "b", ["data-c"]: "d" },
          "Children."
        )
      ),
      new URL("./test/snapshots/Pre/with-props.html", import.meta.url)
    );
  });
};
