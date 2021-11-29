import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Blockquote` bundle size.", async () => {
    await assertBundleSize(new URL("./Blockquote.mjs", import.meta.url), 250);
  });
};
