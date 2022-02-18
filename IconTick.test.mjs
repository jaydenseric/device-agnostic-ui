// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import IconTick from "./IconTick.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `IconTick` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`IconTick` bundle size.", async () => {
    await assertBundleSize(new URL("./IconTick.mjs", import.meta.url), 450);
  });

  tests.add("`IconTick` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(React.createElement(IconTick)),
      new URL("./test/snapshots/IconTick/without-props.html", import.meta.url)
    );
  });

  tests.add("`IconTick` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(IconTick, {
          size: "2em",
          className: "a",
          id: "b",
          ["data-c"]: "d",
        })
      ),
      new URL("./test/snapshots/IconTick/with-props.html", import.meta.url)
    );
  });
};
