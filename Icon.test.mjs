import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Icon` bundle size.", async () => {
    await assertBundleSize(new URL("./Icon.mjs", import.meta.url), 350);
  });
};
