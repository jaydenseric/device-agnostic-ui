// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Select from "./Select.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Select` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Select` bundle size.", async () => {
    await assertBundleSize(new URL("./Select.mjs", import.meta.url), 450);
  });

  tests.add("`Select` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(React.createElement(Select)),
      new URL("./test/snapshots/Select/without-props.html", import.meta.url)
    );
  });

  tests.add("`Select` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Select,
          {
            validationMessage: "Validation message.",
            required: true,
            className: "a",
            id: "b",
            ["data-c"]: "d",
          },
          React.createElement("option", { value: "a" }, "A")
        )
      ),
      new URL("./test/snapshots/Select/with-props.html", import.meta.url)
    );
  });
};
