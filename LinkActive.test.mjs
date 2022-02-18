// @ts-check

import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `LinkActive` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`LinkActive` bundle size.", async () => {
    await assertBundleSize(new URL("./LinkActive.mjs", import.meta.url), 250);
  });
};
