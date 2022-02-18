// @ts-check

import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `useOnFocusReportValidity` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`useOnFocusReportValidity` bundle size.", async () => {
    await assertBundleSize(
      new URL("./useOnFocusReportValidity.mjs", import.meta.url),
      200
    );
  });
};
