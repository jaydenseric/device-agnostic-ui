// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import ListOrdered from "./ListOrdered.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `ListOrdered` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`ListOrdered` bundle size.", async () => {
    await assertBundleSize(new URL("./ListOrdered.mjs", import.meta.url), 250);
  });

  tests.add("`ListOrdered` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          ListOrdered,
          null,
          React.createElement("li", null, "Content.")
        )
      ),
      new URL(
        "./test/snapshots/ListOrdered/without-props.html",
        import.meta.url
      )
    );
  });

  tests.add("`ListOrdered` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          ListOrdered,
          { className: "a", id: "b", ["data-c"]: "d" },
          React.createElement("li", null, "Content.")
        )
      ),
      new URL("./test/snapshots/ListOrdered/with-props.html", import.meta.url)
    );
  });
};
