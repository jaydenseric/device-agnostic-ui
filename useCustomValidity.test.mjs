import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`useCustomValidity` bundle size.", async () => {
    await assertBundleSize(
      new URL("./useCustomValidity.mjs", import.meta.url),
      150
    );
  });
};
