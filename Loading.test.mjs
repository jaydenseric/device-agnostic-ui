// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Loading from "./Loading.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Loading` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Loading` bundle size.", async () => {
    await assertBundleSize(new URL("./Loading.mjs", import.meta.url), 450);
  });

  tests.add("`Loading` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(React.createElement(Loading)),
      new URL("./test/snapshots/Loading/without-props.html", import.meta.url)
    );
  });

  tests.add("`Loading` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Loading, {
          size: "2em",
          title: "Title",
          className: "a",
          id: "b",
          ["data-c"]: "d",
        })
      ),
      new URL("./test/snapshots/Loading/with-props.html", import.meta.url)
    );
  });
};
