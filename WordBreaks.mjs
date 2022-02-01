import React from "react";

import splitWordBreaks from "./splitWordBreaks.mjs";

export default function WordBreaks({ placeholder, children }) {
  const split = React.useMemo(
    () => splitWordBreaks(children, placeholder),
    [children, placeholder]
  );

  return split.length > 1
    ? split.map((part, index) =>
        React.createElement(
          React.Fragment,
          { key: index },
          !!index && React.createElement("wbr"),
          part
        )
      )
    : children;
}
