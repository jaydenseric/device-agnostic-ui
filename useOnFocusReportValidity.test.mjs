import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`useOnFocusReportValidity` bundle size.", async () => {
    await assertBundleSize(
      new URL("./useOnFocusReportValidity.mjs", import.meta.url),
      200
    );
  });
};
