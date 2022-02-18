// @ts-check

import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `useMergedRef` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`useMergedRef` bundle size.", async () => {
    await assertBundleSize(new URL("./useMergedRef.mjs", import.meta.url), 200);
  });
};
