// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Picture from "./Picture.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Picture` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Picture` bundle size.", async () => {
    await assertBundleSize(new URL("./Picture.mjs", import.meta.url), 350);
  });

  tests.add("`Picture` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Picture,
          {
            width: 1,
            height: 2,
            className: "a",
            id: "b",
            ["data-c"]: "d",
          },
          React.createElement("img", { src: "/" })
        )
      ),
      new URL("./test/snapshots/Picture/with-props.html", import.meta.url)
    );
  });
};
