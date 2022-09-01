// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server";
import assertSnapshot from "snapshot-assertion";

import Scroll from "./Scroll.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Scroll` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Scroll` bundle size.", async () => {
    await assertBundleSize(new URL("./Scroll.mjs", import.meta.url), 300);
  });

  tests.add("`Scroll` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Scroll,
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("div", null, "Content.")
          )
        )
      ),
      new URL("./test/snapshots/Scroll/without-props.html", import.meta.url)
    );
  });

  tests.add("`Scroll` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Scroll,
          { className: "a", id: "b", ["data-c"]: "d" },
          React.createElement("div", null, "Content.")
        )
      ),
      new URL("./test/snapshots/Scroll/with-props.html", import.meta.url)
    );
  });
};
