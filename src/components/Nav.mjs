import PropTypes from 'prop-types'
import React from 'react'

const SCROLL_SHADOW_WIDTH = '0.5rem'
const SCROLL_FADE_WIDTH = '3rem'

export const Nav = React.forwardRef(({ children }, ref) => (
  <nav ref={ref}>
    {children}
    <style jsx>{`
      nav {
        --daui-nav-background-lightness: var(--daui-background-lightness);
        --daui-nav-background-opaque: hsl(
          var(--daui-background-hue),
          var(--daui-background-saturation),
          var(--daui-nav-background-lightness)
        );
        --daui-nav-background-transparent: hsla(
          var(--daui-background-hue),
          var(--daui-background-saturation),
          var(--daui-nav-background-lightness),
          0
        );

        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
        padding: 0 1rem;
        background-image: linear-gradient(
            90deg,
            var(--daui-nav-background-opaque),
            var(--daui-nav-background-transparent) ${SCROLL_FADE_WIDTH},
            var(--daui-nav-background-transparent)
              calc(100% - ${SCROLL_FADE_WIDTH}),
            var(--daui-nav-background-opaque)
          ),
          radial-gradient(
            ${SCROLL_SHADOW_WIDTH} 50% at left center,
            hsla(0, 0%, 0%, var(--daui-shadow-opacity)),
            hsla(0, 0%, 0%, 0)
          ),
          radial-gradient(
            ${SCROLL_SHADOW_WIDTH} 50% at right center,
            hsla(0, 0%, 0%, var(--daui-shadow-opacity)),
            hsla(0, 0%, 0%, 0)
          );
        background-attachment: local, scroll, scroll;
        background-color: var(--daui-nav-background-opaque);
        overflow-x: auto;
        overflow-y: hidden;
        overscroll-behavior-x: contain;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        -webkit-overflow-scrolling: touch;
      }

      /* Some browsers (e.g. Firefox) make scrollable elements focusable. */
      nav:focus {
        --daui-nav-background-lightness: calc(
          var(--daui-background-lightness) - 4%
        );

        outline: 0;
      }

      nav::after {
        content: '';
        padding-right: inherit;
      }
    `}</style>
  </nav>
))

Nav.displayName = 'Nav'

Nav.propTypes = {
  children: PropTypes.node
}
