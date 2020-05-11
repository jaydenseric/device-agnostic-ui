import PropTypes from 'prop-types';
import React from 'react';

const VIEW_BOX_SIZE = 100;
const STROKE_WIDTH = 12;

const circleRadius = 50 - STROKE_WIDTH / 2;
const circleCircumference = Math.PI * circleRadius * 2;

export const Loading = React.forwardRef(
  ({ size = '1em', title = 'Loading', ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`}
      {...props}
      ref={ref}
    >
      <title>{title}</title>
      <circle cx="50%" cy="50%" r={circleRadius} />
      <style jsx>{`
        @keyframes loop {
          80% {
            stroke-dashoffset: ${circleCircumference * 0.8};
          }
          100% {
            transform: rotate(${360 * 2}deg);
          }
        }

        @keyframes entry {
          from {
            opacity: 0;
          }
        }

        svg {
          vertical-align: middle;
        }

        circle {
          fill: none;
          stroke: currentColor;
          stroke-width: ${STROKE_WIDTH};
          stroke-dasharray: ${circleCircumference};
          stroke-dashoffset: ${circleCircumference * 0.15};
          stroke-linecap: round;
          transform-origin: center;
          animation: entry 0.25s, loop 1.4s linear infinite;
        }
      `}</style>
    </svg>
  )
);

Loading.displayName = 'Loading';

Loading.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
};
