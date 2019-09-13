import PropTypes from 'prop-types'
import React from 'react'
import { Button } from './Button'
import { IconTick } from './IconTick'
import { Loading } from './Loading'

export const ButtonSubmit = React.forwardRef(
  ({ loading, success, disabled, children, ...props }, ref) => (
    <Button disabled={disabled || loading} {...props} ref={ref}>
      <div>
        <span>{children}</span>
        {loading && <Loading />}
        {!loading && success && <IconTick size="0.8em" />}
      </div>
      <style jsx>{`
        div {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: max-content;
          grid-gap: 0.5em;
          align-items: center;
        }
      `}</style>
    </Button>
  )
)

ButtonSubmit.displayName = 'ButtonSubmit'

ButtonSubmit.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}
