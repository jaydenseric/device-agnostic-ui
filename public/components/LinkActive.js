'use strict';

const { default: Link } = require('next/link');
const { useRouter } = require('next/router');
const PropTypes = require('prop-types');
const React = require('react');

const LinkActive = ({ children, ...props }) => {
  const { pathname } = useRouter();
  return React.createElement(
    Link,
    props,
    React.cloneElement(React.Children.only(children), {
      active: props.href === pathname,
    })
  );
};

if (typeof process === 'object' && process.env.NODE_ENV !== 'production')
  LinkActive.propTypes = {
    href: PropTypes.string,
    children: PropTypes.element.isRequired,
  };

module.exports = LinkActive;
