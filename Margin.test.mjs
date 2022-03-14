// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Margin from "./Margin.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Margin` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Margin` bundle size.", async () => {
    await assertBundleSize(new URL("./Margin.mjs", import.meta.url), 300);
  });

  tests.add("`Margin` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Margin, null, "Children.")
      ),
      new URL("./test/snapshots/Margin/without-props.html", import.meta.url)
    );
  });

  tests.add("`Margin` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Margin,
          { className: "a", id: "b", ["data-c"]: "d" },
          "Children."
        )
      ),
      new URL("./test/snapshots/Margin/with-props.html", import.meta.url)
    );
  });
};
