import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Select` bundle size.", async () => {
    await assertBundleSize(new URL("./Select.mjs", import.meta.url), 450);
  });
};
