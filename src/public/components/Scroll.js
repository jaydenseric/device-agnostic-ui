'use strict';

const PropTypes = require('prop-types');
const React = require('react');

const SCROLL_SHADOW_WIDTH = '1rem';
const SCROLL_FADE_WIDTH = '4rem';

const Scroll = React.forwardRef((props, ref) => (
  <>
    <div {...props} ref={ref} />
    <style jsx>{`
      div {
        --daui-Scroll-background-lightness: calc(
          var(--daui-background-lightness) - 4%
        );
        --daui-Scroll-background-opaque: hsl(
          var(--daui-background-hue),
          var(--daui-background-saturation),
          var(--daui-Scroll-background-lightness)
        );

        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        align-items: flex-start;
        grid-gap: var(--daui-spacing);
        padding: var(--daui-spacing) 0;
        background-color: var(--daui-Scroll-background-opaque);
        overflow-x: auto;
        overflow-y: hidden;
        overscroll-behavior-x: contain;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        -webkit-overflow-scrolling: touch;
      }

      @supports (overscroll-behavior-x: contain) and
        (not (-webkit-overflow-scrolling: touch)) {
        div {
          --daui-Scroll-background-transparent: hsla(
            var(--daui-background-hue),
            var(--daui-background-saturation),
            var(--daui-Scroll-background-lightness),
            0
          );

          background-image: linear-gradient(
              90deg,
              var(--daui-Scroll-background-opaque),
              var(--daui-Scroll-background-transparent) ${SCROLL_FADE_WIDTH},
              var(--daui-Scroll-background-transparent)
                calc(100% - ${SCROLL_FADE_WIDTH}),
              var(--daui-Scroll-background-opaque)
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
      div:focus {
        --daui-Scroll-background-lightness: calc(
          var(--daui-background-lightness) - 8%
        );

        outline: 0;
      }

      div::before,
      div::after {
        content: '';
        align-self: stretch;
      }

      /* If the last grid item has 0 width it doesn’t render. */
      div::after {
        width: 1px;
        margin-left: -1px;
      }
    `}</style>
  </>
));

if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
  Scroll.displayName = 'Scroll';
  Scroll.propTypes = {
    children: PropTypes.node.isRequired,
  };
}

module.exports = Scroll;
