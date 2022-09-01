// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server";
import assertSnapshot from "snapshot-assertion";

import LinkCard from "./LinkCard.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `LinkCard` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`LinkCard` bundle size.", async () => {
    await assertBundleSize(new URL("./LinkCard.mjs", import.meta.url), 300);
  });

  tests.add("`LinkCard` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(LinkCard, null, "Children.")
      ),
      new URL("./test/snapshots/LinkCard/without-props.html", import.meta.url)
    );
  });

  tests.add("`LinkCard` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          LinkCard,
          {
            active: true,
            href: "/",
            className: "a",
            id: "b",
            ["data-c"]: "d",
          },
          "Children."
        )
      ),
      new URL("./test/snapshots/LinkCard/with-props.html", import.meta.url)
    );
  });
};
