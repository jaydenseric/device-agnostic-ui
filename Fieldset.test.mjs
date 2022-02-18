// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Fieldset from "./Fieldset.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Fieldset` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Fieldset` bundle size.", async () => {
    await assertBundleSize(new URL("./Fieldset.mjs", import.meta.url), 300);
  });

  tests.add("`Fieldset` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Fieldset, null, "Children.")
      ),
      new URL("./test/snapshots/Fieldset/without-props.html", import.meta.url)
    );
  });

  tests.add("`Fieldset` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Fieldset,
          {
            legend: "Legend.",
            className: "a",
            id: "b",
            ["data-c"]: "d",
          },
          "Children."
        )
      ),
      new URL("./test/snapshots/Fieldset/with-props.html", import.meta.url)
    );
  });
};
