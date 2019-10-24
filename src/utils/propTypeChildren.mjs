import PropTypes from 'prop-types'

export const propTypeChildren = (...args) => PropTypes.node(...args)

propTypeChildren.isRequired = function() {
  const [props, propName, componentName] = arguments

  // There is no need to check if both `children` and `dangerouslySetInnerHTML`
  // are defined at the same time, as React will error anyway.

  if (!props.children && !props.dangerouslySetInnerHTML)
    return new Error(
      `The prop \`${propName}\` or \`dangerouslySetInnerHTML\` is marked as required in \`${componentName}\`, but neither were defined.`
    )

  return PropTypes.node(...arguments)
}
