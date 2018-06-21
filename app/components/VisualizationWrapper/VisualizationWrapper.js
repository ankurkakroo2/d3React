import React from 'react';
import { node, number } from 'prop-types';

const VisualizationWrapper = ({ children, viewBoxWidth, viewBoxHeight }) => (
  <svg
    height="100%"
    width="100%"
    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
  >
    {children}
  </svg>
);

VisualizationWrapper.propTypes = {
  children: node,
  viewBoxWidth: number,
  viewBoxHeight: number
};

export default VisualizationWrapper;
