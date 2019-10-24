/**
 * Creates a React `className` prop value for multiple classes.
 * @param {...*} classes A parameter for each class; only non empty strings are added to the final string.
 * @returns {string|undefined} A `className` prop value; either a string of classes or `undefined` to prevent rendering an empty `class` attribute.
 */
export const classNameProp = (...classes) =>
  classes.filter(name => name && typeof name === 'string').join(' ') ||
  undefined
