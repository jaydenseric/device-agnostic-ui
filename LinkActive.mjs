import NextLink from "next/link.js";
import NextRouter from "next/router.js";
import React from "react";

export default function LinkActive({ children, ...props }) {
  const { pathname } = NextRouter.useRouter();

  return React.createElement(
    NextLink.default,
    props,
    React.cloneElement(React.Children.only(children), {
      active: props.href === pathname,
    })
  );
}
