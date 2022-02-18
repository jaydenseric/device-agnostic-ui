// @ts-check

import React from "react";

/**
 * A React hook that merges multiple React refs into one to use on an element.
 * @see [GitHub comment](https://github.com/facebook/react/issues/13029#issuecomment-522632038).
 * @template T
 * @param {Array<
 *   | React.MutableRefObject<T | null>
 *   | React.RefCallback<T>
 *   | null
 *   | undefined
 * >} refs React refs. `undefined` is allowed to make it easy to use refs from
 *   optional React component props.
 * @returns {React.MutableRefObject<T | null>} Merged React ref.
 */
export default function useMergedRef(refs) {
  const mergedRef = React.useRef(/** @type {T | null} */ (null));

  React.useEffect(
    () => {
      for (const ref of refs) {
        // Skip an undefined or null ref.
        if (!ref) continue;
        if (typeof ref === "function") ref(mergedRef.current);
        else ref.current = mergedRef.current;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );

  return mergedRef;
}
