import NextLink from "next/link.js";
import NextRouter from "next/router.js";
import PropTypes from "prop-types";
import React from "react";

const LinkActive = ({ children, ...props }) => {
  const { pathname } = NextRouter.useRouter();
  return React.createElement(
    NextLink.default,
    props,
    React.cloneElement(React.Children.only(children), {
      active: props.href === pathname,
    })
  );
};

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  LinkActive.propTypes = {
    href: PropTypes.string,
    children: PropTypes.element.isRequired,
  };

export default LinkActive;
