import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Code` bundle size.", async () => {
    await assertBundleSize(new URL("./Code.mjs", import.meta.url), 250);
  });
};
