import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Margin` bundle size.", async () => {
    await assertBundleSize(new URL("./Margin.mjs", import.meta.url), 250);
  });
};
