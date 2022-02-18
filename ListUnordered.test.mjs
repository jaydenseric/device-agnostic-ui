// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import ListUnordered from "./ListUnordered.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `ListUnordered` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`ListUnordered` bundle size.", async () => {
    await assertBundleSize(
      new URL("./ListUnordered.mjs", import.meta.url),
      250
    );
  });

  tests.add("`ListUnordered` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          ListUnordered,
          null,
          React.createElement("li", null, "Content.")
        )
      ),
      new URL(
        "./test/snapshots/ListUnordered/without-props.html",
        import.meta.url
      )
    );
  });

  tests.add("`ListUnordered` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          ListUnordered,
          { className: "a", id: "b", ["data-c"]: "d" },
          React.createElement("li", null, "Content.")
        )
      ),
      new URL("./test/snapshots/ListUnordered/with-props.html", import.meta.url)
    );
  });
};
