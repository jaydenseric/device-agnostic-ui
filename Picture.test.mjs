import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Picture` bundle size.", async () => {
    await assertBundleSize(new URL("./Picture.mjs", import.meta.url), 300);
  });
};
