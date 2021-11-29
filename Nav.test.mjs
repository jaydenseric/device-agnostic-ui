import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Nav` bundle size.", async () => {
    await assertBundleSize(new URL("./Nav.mjs", import.meta.url), 250);
  });
};
