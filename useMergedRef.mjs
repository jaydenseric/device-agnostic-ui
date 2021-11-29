import React from "react";

/**
 * A React hook that merges multiple React refs into one to use on an element.
 * @see [GitHub comment](https://github.com/facebook/react/issues/13029#issuecomment-522632038)
 * @param {Array<string|object|Function|null>} refs React refs.
 * @returns {object} React ref.
 */
export default function useMergedRef(refs) {
  const mergedRef = React.useRef();

  React.useEffect(
    () => {
      refs.forEach((ref) => {
        if (!ref) return;
        if (typeof ref === "function") ref(mergedRef.current);
        else ref.current = mergedRef.current;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );

  return mergedRef;
}
