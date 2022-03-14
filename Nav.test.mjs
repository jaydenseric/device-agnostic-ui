// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import Nav from "./Nav.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Nav` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Nav` bundle size.", async () => {
    await assertBundleSize(new URL("./Nav.mjs", import.meta.url), 300);
  });

  tests.add("`Nav` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Nav, null, "Children.")
      ),
      new URL("./test/snapshots/Nav/without-props.html", import.meta.url)
    );
  });

  tests.add("`Nav` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Nav,
          { className: "a", id: "b", ["data-c"]: "d" },
          "Children."
        )
      ),
      new URL("./test/snapshots/Nav/with-props.html", import.meta.url)
    );
  });
};
