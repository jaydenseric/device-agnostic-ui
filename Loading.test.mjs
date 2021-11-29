import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Loading` bundle size.", async () => {
    await assertBundleSize(new URL("./Loading.mjs", import.meta.url), 400);
  });
};
