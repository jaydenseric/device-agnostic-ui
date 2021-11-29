import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Button` bundle size.", async () => {
    await assertBundleSize(new URL("./Button.mjs", import.meta.url), 300);
  });
};
