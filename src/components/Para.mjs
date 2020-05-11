import classNameProp from 'class-name-prop';
import PropTypes from 'prop-types';
import React from 'react';
import { stylesPara } from '../styles/stylesPara';
import { propTypeChildren } from '../utils/propTypeChildren';

export const Para = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <p
      className={classNameProp(stylesPara.className, className)}
      {...props}
      ref={ref}
    />
    {stylesPara.styles}
  </>
));

Para.displayName = 'Para';

Para.propTypes = {
  className: PropTypes.string,
  children: propTypeChildren.isRequired,
};
