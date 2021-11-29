import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`List` bundle size.", async () => {
    await assertBundleSize(new URL("./List.mjs", import.meta.url), 250);
  });
};
