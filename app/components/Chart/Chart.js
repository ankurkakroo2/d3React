import React from 'react';
import { extent } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleLinear, scaleTime } from 'd3-scale';
import { select } from 'd3-selection';
import { line } from 'd3-shape';
import { array, bool, number, object } from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import VisualizationWrapper from '../VisualizationWrapper';

const margin = {
  top: 20, right: 20, bottom: 20, left: 80
};

class Chart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.width = props.viewBoxWidth - margin.left - margin.right;
    this.height = props.viewBoxHeight - margin.top - margin.bottom;
    this.x = scaleTime()
      .range([0, this.width]);

    this.y = scaleLinear()
      .range([this.height, 0]);

    this.lineGenerator = line()
      .x((data) => this.x(new Date(data.x)))
      .y((data) => this.y(data.y));
  }

  componentDidUpdate() {
    if (this.props.data) {
      this.drawAxis();
    }
  }

  /**
   * @function drawAxis
   * @description This will call functions which draws X axis and Y axis of the Line Chart
   * @returns {void}
  */
  drawAxis() {
    this.xAxis.call(this.drawXAxis());
    this.yAxis.call(this.drawYAxis());
  }

  /**
   * @function drawXAxis
   * @description The function will draw X axis of the Line Chart
   * @returns {function}
  */
  drawXAxis = () => axisBottom().scale(this.x).ticks(this.props.data.length);

  /**
   * @function drawYAxis
   * @description The function will draw Y axis of the Line Chart
   * @returns {function}
  */
  drawYAxis = () => axisLeft().scale(this.y);

  /**
   * @function updateXAxis
   * @description The function will update reference for X-Axis
   * @returns {void}
  */
  updateXAxis = (r) => { this.xAxis = select(r); };

  /**
   * @function updateYAxis
   * @description The function will update reference for Y-Axis
   * @returns {void}
  */
  updateYAxis = (r) => { this.yAxis = select(r); }

  render() {
    const {
      data, error, isFetching, viewBoxWidth, viewBoxHeight
    } = this.props;

    if (isFetching) return <LoadingIndicator />;
    if (error) return null; // More elegant ways for error handling

    this.x.domain(extent(data, (d) => new Date(d.x)));
    this.y.domain(extent(data, (d) => d.y));

    return (
      <VisualizationWrapper
        viewBoxWidth={viewBoxWidth}
        viewBoxHeight={viewBoxHeight}
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          <g className="axis" ref={this.updateXAxis} transform={`translate(0, ${this.height})`}></g>
          <g className="axis" ref={this.updateYAxis}></g>
          <path className="line" ref={(r) => { this.actual = select(r); }} d={this.lineGenerator(data)}></path>
        </g>
      </VisualizationWrapper>
    );
  }
}

Chart.propTypes = {
  data: array,
  isFetching: bool,
  viewBoxWidth: number,
  viewBoxHeight: number,
  error: object
};

Chart.defaultProps = {
  viewBoxWidth: 800,
  viewBoxHeight: 300,
  data: []
};

export default Chart;
