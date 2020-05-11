import classNameProp from 'class-name-prop';
import PropTypes from 'prop-types';
import React from 'react';
import { stylesList } from '../styles/stylesList';
import { propTypeChildren } from '../utils/propTypeChildren';

export const List = React.forwardRef(
  ({ ordered, className, ...props }, ref) => {
    const Element = ordered ? 'ol' : 'ul';
    return (
      <>
        <Element
          className={classNameProp(stylesList.className, className)}
          {...props}
          ref={ref}
        />
        {stylesList.styles}
      </>
    );
  }
);

List.displayName = 'List';

List.propTypes = {
  ordered: PropTypes.bool,
  className: PropTypes.string,
  children: propTypeChildren.isRequired,
};
