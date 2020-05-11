import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

export const LinkActive = ({ children, ...props }) => {
  const { pathname } = useRouter();
  return (
    <Link {...props}>
      {React.cloneElement(React.Children.only(children), {
        active: props.href === pathname,
      })}
    </Link>
  );
};

LinkActive.propTypes = {
  href: PropTypes.string,
  children: PropTypes.element.isRequired,
};
