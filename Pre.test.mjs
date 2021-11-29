import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Pre` bundle size.", async () => {
    await assertBundleSize(new URL("./Pre.mjs", import.meta.url), 250);
  });
};
