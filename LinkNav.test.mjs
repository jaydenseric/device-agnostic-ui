// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import LinkNav from "./LinkNav.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `LinkNav` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`LinkNav` bundle size.", async () => {
    await assertBundleSize(new URL("./LinkNav.mjs", import.meta.url), 250);
  });

  tests.add("`LinkNav` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(LinkNav, null, "Children")
      ),
      new URL("./test/snapshots/LinkNav/without-props.html", import.meta.url)
    );
  });

  tests.add("`LinkNav` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          LinkNav,
          {
            active: true,
            href: "/",
            className: "a",
            id: "b",
            ["data-c"]: "d",
          },
          "Children"
        )
      ),
      new URL("./test/snapshots/LinkNav/with-props.html", import.meta.url)
    );
  });
};
