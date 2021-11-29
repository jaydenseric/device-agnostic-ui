import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`LinkText` bundle size.", async () => {
    await assertBundleSize(new URL("./LinkText.mjs", import.meta.url), 250);
  });
};
