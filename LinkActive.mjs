// @ts-check

import NextLink from "next/link.js";
import NextRouter from "next/router.js";
import React from "react";

/**
 * Next.js `Link` component.
 * @see https://nextjs.org/docs/api-reference/next/link
 */
const Link = NextLink.default;

/**
 * React component for a Next.js route link that puts an `active` boolean prop
 * on the child indicating if the link matches the current route path.
 */
export default function LinkActive(
  /**
   * @type {Omit<React.ComponentPropsWithoutRef<typeof Link>, "children">
   *   & { children: React.ReactElement }}
   */
  { children, ...props }
) {
  const { pathname } = NextRouter.useRouter();

  return React.createElement(
    Link,
    props,
    React.cloneElement(React.Children.only(children), {
      active: props.href === pathname,
    })
  );
}
