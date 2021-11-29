import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Fieldset` bundle size.", async () => {
    await assertBundleSize(new URL("./Fieldset.mjs", import.meta.url), 300);
  });
};
