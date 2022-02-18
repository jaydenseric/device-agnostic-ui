// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Para from "./Para.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Para` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Para` bundle size.", async () => {
    await assertBundleSize(new URL("./Para.mjs", import.meta.url), 250);
  });

  tests.add("`Para` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Para, null, "Children.")
      ),
      new URL("./test/snapshots/Para/without-props.html", import.meta.url)
    );
  });

  tests.add("`Para` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Para,
          { className: "a", id: "b", ["data-c"]: "d" },
          "Children."
        )
      ),
      new URL("./test/snapshots/Para/with-props.html", import.meta.url)
    );
  });
};
