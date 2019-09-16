import React from 'react'
import { Icon } from './Icon'

export const IconTick = React.forwardRef((props, ref) => (
  <Icon title="Tick" {...props} ref={ref}>
    <polyline
      points="2,15 13,28 29,4"
      strokeWidth="6"
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
))

IconTick.displayName = 'IconTick'
