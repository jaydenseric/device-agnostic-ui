// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import assertBundleSize from "./test/assertBundleSize.mjs";
import Textbox from "./Textbox.mjs";

/**
 * Adds `Textbox` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Textbox` bundle size.", async () => {
    await assertBundleSize(new URL("./Textbox.mjs", import.meta.url), 550);
  });

  tests.add("`Textbox` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(React.createElement(Textbox)),
      new URL("./test/snapshots/Textbox/without-props.html", import.meta.url)
    );
  });

  tests.add("`Textbox` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Textbox, {
          type: "email",
          validationMessage: "Validation message.",
          required: true,
          className: "a",
          id: "b",
          ["data-c"]: "d",
        })
      ),
      new URL("./test/snapshots/Textbox/with-props.html", import.meta.url)
    );
  });
};
