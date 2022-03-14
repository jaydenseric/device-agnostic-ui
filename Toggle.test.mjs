// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import assertSnapshot from "snapshot-assertion";

import assertBundleSize from "./test/assertBundleSize.mjs";
import Toggle from "./Toggle.mjs";

/**
 * Adds `Toggle` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`Toggle` bundle size.", async () => {
    await assertBundleSize(new URL("./Toggle.mjs", import.meta.url), 850);
  });

  tests.add("`Toggle` with minimal props, checkbox input.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Toggle, {
          inputProps: {
            type: "checkbox",
          },
        })
      ),
      new URL(
        "./test/snapshots/Toggle/minimal-props-checkbox.html",
        import.meta.url
      )
    );
  });

  tests.add("`Toggle` with minimal props, radio input.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(Toggle, {
          inputProps: {
            type: "checkbox",
          },
        })
      ),
      new URL(
        "./test/snapshots/Toggle/minimal-props-radio.html",
        import.meta.url
      )
    );
  });

  tests.add("`Toggle` with props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Toggle,
          {
            className: "a",
            id: "b",
            ["data-c"]: "d",
            inputProps: {
              type: "checkbox",
              className: "e",
              id: "f",
              ["data-g"]: "h",
            },
          },
          "Label."
        )
      ),
      new URL("./test/snapshots/Toggle/with-props.html", import.meta.url)
    );
  });
};
