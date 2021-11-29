import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Textbox` bundle size.", async () => {
    await assertBundleSize(new URL("./Textbox.mjs", import.meta.url), 500);
  });
};
