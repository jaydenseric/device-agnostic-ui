// @ts-check

import assertBundleSize from "./test/assertBundleSize.mjs";

/**
 * Adds `useCustomValidity` tests.
 * @param {import("test-director").default} tests Test director.
 */
export default (tests) => {
  tests.add("`useCustomValidity` bundle size.", async () => {
    await assertBundleSize(
      new URL("./useCustomValidity.mjs", import.meta.url),
      150
    );
  });
};
