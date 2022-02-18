// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Icon from "./Icon.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Icon` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Icon` bundle size.", async () => {
    await assertBundleSize(new URL("./Icon.mjs", import.meta.url), 350);
  });

  tests.add("`Icon` with minimal props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Icon,
          { title: "Circle" },
          React.createElement("circle", {
            cx: "50%",
            cy: "50%",
            r: "50%",
            stroke: "none",
          })
        )
      ),
      new URL("./test/snapshots/Icon/minimal-props.html", import.meta.url)
    );
  });

  tests.add("`Icon` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Icon,
          {
            size: "2em",
            title: "Circle",
            className: "a",
            id: "b",
            ["data-c"]: "d",
          },
          React.createElement("circle", {
            cx: "50%",
            cy: "50%",
            r: "50%",
            stroke: "none",
          })
        )
      ),
      new URL("./test/snapshots/Icon/with-props.html", import.meta.url)
    );
  });
};
