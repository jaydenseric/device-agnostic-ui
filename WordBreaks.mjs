import React from "react";
import splitWordBreaks from "./splitWordBreaks.mjs";

const WordBreaks = ({ placeholder, children }) => {
  const split = React.useMemo(
    () => splitWordBreaks(children, placeholder),
    [children, placeholder]
  );

  return split.length
    ? split.map((part, index) =>
        React.createElement(
          React.Fragment,
          {
            // eslint-disable-next-line react/no-array-index-key
            key: index,
          },
          !!index && React.createElement("wbr"),
          part
        )
      )
    : children;
};

export default WordBreaks;
