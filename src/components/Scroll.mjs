import PropTypes from 'prop-types'
import React from 'react'

const SCROLL_SHADOW_WIDTH_EM = '1em'
const SCROLL_FADE_WIDTH_EM = '4em'

export const Scroll = React.forwardRef(({ children, ...props }, ref) => (
  <div className="scroll" {...props} ref={ref}>
    <div className="grid">{children}</div>
    <style jsx>{`
      .scroll {
        --daui-scroll-background-lightness: calc(
          var(--daui-background-lightness) - 4%
        );
        --daui-scroll-background-opaque: hsl(
          var(--daui-background-hue),
          var(--daui-background-saturation),
          var(--daui-scroll-background-lightness)
        );
        --daui-scroll-background-transparent: hsla(
          var(--daui-background-hue),
          var(--daui-background-saturation),
          var(--daui-scroll-background-lightness),
          0
        );

        display: grid;
        max-width: 100%;
        background-image: linear-gradient(
            90deg,
            var(--daui-scroll-background-opaque),
            var(--daui-scroll-background-transparent) ${SCROLL_FADE_WIDTH_EM},
            var(--daui-scroll-background-transparent)
              calc(100% - ${SCROLL_FADE_WIDTH_EM}),
            var(--daui-scroll-background-opaque)
          ),
          radial-gradient(
            ${SCROLL_SHADOW_WIDTH_EM} 50% at left center,
            hsla(0, 0%, 0%, var(--daui-shadow-opacity)),
            hsla(0, 0%, 0%, 0)
          ),
          radial-gradient(
            ${SCROLL_SHADOW_WIDTH_EM} 50% at right center,
            hsla(0, 0%, 0%, var(--daui-shadow-opacity)),
            hsla(0, 0%, 0%, 0)
          );
        background-attachment: local, scroll, scroll;
        background-color: var(--daui-scroll-background-opaque);
        overflow-x: auto;
        overflow-y: hidden;
        overscroll-behavior-x: contain;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        -webkit-overflow-scrolling: touch;
      }

      /* Some browsers (e.g. Firefox) make scrollable elements focusable. */
      .scroll:focus {
        --daui-scroll-background-lightness: calc(
          var(--daui-background-lightness) - 8%
        );

        outline: 0;
      }

      .grid {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        align-items: flex-start;
        padding: 1.5rem;
        grid-gap: 1.5rem;
      }
    `}</style>
  </div>
))

Scroll.displayName = 'Scroll'

Scroll.propTypes = {
  children: PropTypes.node.isRequired
}
