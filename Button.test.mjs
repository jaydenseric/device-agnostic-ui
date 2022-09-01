// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server";
import assertSnapshot from "snapshot-assertion";

import Button from "./Button.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `Button` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Button` bundle size.", async () => {
    await assertBundleSize(new URL("./Button.mjs", import.meta.url), 350);
  });

  tests.add("`Button` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Button, null, "Children")
      ),
      new URL("./test/snapshots/Button/without-props.html", import.meta.url)
    );
  });

  tests.add("`Button` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Button,
          {
            disabled: true,
            className: "a",
            id: "b",
            ["data-c"]: "d",
          },
          "Children"
        )
      ),
      new URL("./test/snapshots/Button/with-props.html", import.meta.url)
    );
  });
};
