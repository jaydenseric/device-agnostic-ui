// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import LinkText from "./LinkText.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `LinkText` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`LinkText` bundle size.", async () => {
    await assertBundleSize(new URL("./LinkText.mjs", import.meta.url), 300);
  });

  tests.add("`LinkText` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(LinkText, null, "Children")
      ),
      new URL("./test/snapshots/LinkText/without-props.html", import.meta.url)
    );
  });

  tests.add("`LinkText` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          LinkText,
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
      new URL("./test/snapshots/LinkText/with-props.html", import.meta.url)
    );
  });
};
