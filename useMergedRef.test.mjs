import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`useMergedRef` bundle size.", async () => {
    await assertBundleSize(new URL("./useMergedRef.mjs", import.meta.url), 200);
  });
};
