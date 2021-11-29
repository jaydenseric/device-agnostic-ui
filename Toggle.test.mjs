import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Toggle` bundle size.", async () => {
    await assertBundleSize(new URL("./Toggle.mjs", import.meta.url), 750);
  });
};
