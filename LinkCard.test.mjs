import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`LinkCard` bundle size.", async () => {
    await assertBundleSize(new URL("./LinkCard.mjs", import.meta.url), 250);
  });
};
