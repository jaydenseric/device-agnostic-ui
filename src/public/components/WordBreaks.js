'use strict';

const PropTypes = require('prop-types');
const React = require('react');
const splitWordBreaks = require('../utils/splitWordBreaks.js');

const WordBreaks = ({ placeholder, children }) => {
  const split = React.useMemo(
    () => splitWordBreaks(children, placeholder),
    [children, placeholder]
  );

  return split.length
    ? split.map((part, index) => (
        <React.Fragment
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {!!index && <wbr />}
          {part}
        </React.Fragment>
      ))
    : children;
};

if (typeof process === 'object' && process.env.NODE_ENV !== 'production')
  WordBreaks.propTypes = {
    placeholder: PropTypes.string,
    children: PropTypes.string.isRequired,
  };

module.exports = WordBreaks;
