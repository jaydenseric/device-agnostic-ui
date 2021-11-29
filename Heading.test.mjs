import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`Heading` bundle size.", async () => {
    await assertBundleSize(new URL("./Heading.mjs", import.meta.url), 400);
  });
};
