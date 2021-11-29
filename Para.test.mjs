import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Para` bundle size.", async () => {
    await assertBundleSize(new URL("./Para.mjs", import.meta.url), 250);
  });
};
