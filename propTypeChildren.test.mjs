import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`propTypeChildren` bundle size.", async () => {
    await assertBundleSize(
      new URL("./propTypeChildren.mjs", import.meta.url),
      250
    );
  });
};
