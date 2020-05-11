import React from 'react';
import { propTypeChildren } from '../utils/propTypeChildren';

export const Margin = React.forwardRef((props, ref) => (
  <>
    <div {...props} ref={ref} />
    <style jsx>{`
      div {
        margin: var(--daui-spacing);
      }
    `}</style>
  </>
));

Margin.displayName = 'Margin';

Margin.propTypes = {
  children: propTypeChildren.isRequired,
};
