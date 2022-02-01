import { deepStrictEqual } from "assert";

import splitWordBreaks from "./splitWordBreaks.mjs";
import assertBundleSize from "./test/assertBundleSize.mjs";

export default (tests) => {
  tests.add("`splitWordBreaks` bundle size.", async () => {
    await assertBundleSize(
      new URL("./splitWordBreaks.mjs", import.meta.url),
      200
    );
  });

  tests.add("`splitWordBreaks` with various arguments.", () => {
    deepStrictEqual(splitWordBreaks("learnHTML5WithUs"), [
      "learn",
      "HTML",
      "5",
      "With",
      "Us",
    ]);

    deepStrictEqual(splitWordBreaks("learn HTML 5 With Us"), [
      "learn HTML 5 With Us",
    ]);

    deepStrictEqual(splitWordBreaks("Foo <wbr /> barBaz", "_"), [
      "Foo <wbr /> bar",
      "Baz",
    ]);
  });
};
