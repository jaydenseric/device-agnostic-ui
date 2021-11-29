import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`LinkNav` bundle size.", async () => {
    await assertBundleSize(new URL("./LinkNav.mjs", import.meta.url), 250);
  });
};
