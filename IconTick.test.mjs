import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`IconTick` bundle size.", async () => {
    await assertBundleSize(new URL("./IconTick.mjs", import.meta.url), 450);
  });
};
