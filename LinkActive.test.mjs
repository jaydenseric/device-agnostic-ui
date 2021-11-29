import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`LinkActive` bundle size.", async () => {
    await assertBundleSize(new URL("./LinkActive.mjs", import.meta.url), 250);
  });
};
