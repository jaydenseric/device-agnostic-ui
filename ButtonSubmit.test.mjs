import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`ButtonSubmit` bundle size.", async () => {
    await assertBundleSize(new URL("./ButtonSubmit.mjs", import.meta.url), 800);
  });
};
