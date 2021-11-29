import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`WordBreaks` bundle size.", async () => {
    await assertBundleSize(new URL("./WordBreaks.mjs", import.meta.url), 350);
  });
};
