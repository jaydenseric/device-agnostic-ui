import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Table` bundle size.", async () => {
    await assertBundleSize(new URL("./Table.mjs", import.meta.url), 250);
  });
};
