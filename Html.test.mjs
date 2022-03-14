// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Html from "./Html.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Html` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Html` bundle size.", async () => {
    await assertBundleSize(new URL("./Html.mjs", import.meta.url), 350);
  });

  tests.add("`Html` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Html,
          null,
          React.createElement("h1", null, "Heading")
        )
      ),
      new URL("./test/snapshots/Html/without-props.html", import.meta.url)
    );
  });

  tests.add("`Html` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Html,
          { className: "a", id: "b", ["data-c"]: "d" },
          React.createElement("h1", null, "Heading")
        )
      ),
      new URL("./test/snapshots/Html/with-props.html", import.meta.url)
    );
  });
};
