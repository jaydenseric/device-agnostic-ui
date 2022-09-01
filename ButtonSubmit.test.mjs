// @ts-check

import React from "react";
import ReactDOMServer from "react-dom/server";
import assertSnapshot from "snapshot-assertion";

import ButtonSubmit from "./ButtonSubmit.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `ButtonSubmit` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`ButtonSubmit` bundle size.", async () => {
    await assertBundleSize(new URL("./ButtonSubmit.mjs", import.meta.url), 900);
  });

  tests.add("`ButtonSubmit` without props.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(React.createElement(ButtonSubmit)),
      new URL(
        "./test/snapshots/ButtonSubmit/without-props.html",
        import.meta.url
      )
    );
  });

  tests.add("`ButtonSubmit` with props, general.", async () => {
    await assertSnapshot(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(ButtonSubmit, {
          className: "a",
          id: "b",
          ["data-c"]: "d",
        })
      ),
      new URL(
        "./test/snapshots/ButtonSubmit/with-props-general.html",
        import.meta.url
      )
    );
  });

  tests.add(
    "`ButtonSubmit` with props, loading true, success false.",
    async () => {
      await assertSnapshot(
        ReactDOMServer.renderToStaticMarkup(
          React.createElement(ButtonSubmit, {
            loading: true,
            success: false,
          })
        ),
        new URL(
          "./test/snapshots/ButtonSubmit/with-props-loading-true-success-false.html",
          import.meta.url
        )
      );
    }
  );

  tests.add(
    "`ButtonSubmit` with props, loading true, success true.",
    async () => {
      await assertSnapshot(
        ReactDOMServer.renderToStaticMarkup(
          React.createElement(ButtonSubmit, {
            loading: true,
            success: true,
          })
        ),
        new URL(
          "./test/snapshots/ButtonSubmit/with-props-loading-true-success-true.html",
          import.meta.url
        )
      );
    }
  );

  tests.add(
    "`ButtonSubmit` with props, loading false, success true.",
    async () => {
      await assertSnapshot(
        ReactDOMServer.renderToStaticMarkup(
          React.createElement(ButtonSubmit, {
            loading: false,
            success: true,
          })
        ),
        new URL(
          "./test/snapshots/ButtonSubmit/with-props-loading-false-success-true.html",
          import.meta.url
        )
      );
    }
  );
};
