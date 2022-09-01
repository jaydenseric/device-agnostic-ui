// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server";
import assertSnapshot from "snapshot-assertion";

import Heading from "./Heading.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Heading` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Heading` bundle size.", async () => {
    await assertBundleSize(new URL("./Heading.mjs", import.meta.url), 450);
  });

  tests.add("`Heading` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Heading, null, "Children")
      ),
      new URL("./test/snapshots/Heading/without-props.html", import.meta.url)
    );
  });

  tests.add("`Heading` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Heading,
          {
            level: 2,
            size: 3,
            className: "a",
            id: "b",
            ["data-c"]: "d",
          },
          "Children"
        )
      ),
      new URL("./test/snapshots/Heading/with-props.html", import.meta.url)
    );
  });
};
