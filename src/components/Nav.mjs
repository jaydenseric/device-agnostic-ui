import React from 'react'
import { propTypeChildren } from '../utils/propTypeChildren'

const SCROLL_SHADOW_WIDTH = '0.5rem'
const SCROLL_FADE_WIDTH = '3rem'

export const Nav = React.forwardRef((props, ref) => (
  <>
    <nav {...props} ref={ref} />
    <style jsx>{`
      nav {
        --daui-Nav-background-lightness: var(--daui-background-lightness);
        --daui-Nav-background-opaque: hsl(
          var(--daui-background-hue),
          var(--daui-background-saturation),
          var(--daui-Nav-background-lightness)
        );

        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
        padding: 0 1rem;
        background-color: var(--daui-Nav-background-opaque);
        overflow-x: auto;
        overflow-y: hidden;
        overscroll-behavior-x: contain;
        scrollbar-width: thin;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        -webkit-overflow-scrolling: touch;
      }

      @supports (overscroll-behavior-x: contain) and
        (not (-webkit-overflow-scrolling: touch)) {
        nav {
          --daui-Nav-background-transparent: hsla(
            var(--daui-background-hue),
            var(--daui-background-saturation),
            var(--daui-Nav-background-lightness),
            0
          );

          background-image: linear-gradient(
              90deg,
              var(--daui-Nav-background-opaque),
              var(--daui-Nav-background-transparent) ${SCROLL_FADE_WIDTH},
              var(--daui-Nav-background-transparent)
                calc(100% - ${SCROLL_FADE_WIDTH}),
              var(--daui-Nav-background-opaque)
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
        }
      }

      /* Some browsers (e.g. Firefox) make scrollable elements focusable. */
      nav:focus {
        --daui-Nav-background-lightness: calc(
          var(--daui-background-lightness) - 4%
        );

        outline: 0;
      }

      nav::after {
        content: '';
        padding-right: inherit;
      }
    `}</style>
  </>
))

Nav.displayName = 'Nav'

Nav.propTypes = {
  children: propTypeChildren.isRequired
}
