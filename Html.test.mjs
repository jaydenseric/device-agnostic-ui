import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Html` bundle size.", async () => {
    await assertBundleSize(new URL("./Html.mjs", import.meta.url), 250);
  });
};
