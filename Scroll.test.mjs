import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Scroll` bundle size.", async () => {
    await assertBundleSize(new URL("./Scroll.mjs", import.meta.url), 250);
  });
};
