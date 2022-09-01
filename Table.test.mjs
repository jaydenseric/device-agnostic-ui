// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server";
import assertSnapshot from "snapshot-assertion";

import Table from "./Table.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Table` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Table` bundle size.", async () => {
    await assertBundleSize(new URL("./Table.mjs", import.meta.url), 300);
  });

  tests.add("`Table` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Table,
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("td", null, "Content.")
          )
        )
      ),
      new URL("./test/snapshots/Table/without-props.html", import.meta.url)
    );
  });

  tests.add("`Table` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Table,
          { className: "a", id: "b", ["data-c"]: "d" },
          React.createElement(
            "tr",
            null,
            React.createElement("td", null, "Content.")
          )
        )
      ),
      new URL("./test/snapshots/Table/with-props.html", import.meta.url)
    );
  });
};
