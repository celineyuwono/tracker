import React from 'react';
import defaultsDeep from 'lodash.defaultsdeep';

import Chart from '../Chart';

const defaultOptions = {
  // disable tooltips
  tooltips: {
    enabled: false,
    mode: null
  },
  hover: { mode: null },
  // all invisible
  scales: {
    yAxes: [
      {
        ticks: {
          display: false
        },
        gridLines: {
          drawBorder: false,
          drawTicks: false,
          color: 'transparent',
          zeroLineWidth: 1
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: false
        },
        gridLines: {
          drawBorder: false,
          drawTicks: false,
          color: 'transparent',
          zeroLineWidth: 1
        }
      }
    ]
  }
};

const defaultDatasetOptions = {
  pointRadius: 0,
  lineTension: 0,
  borderWidth: 2,
  pointStyle: 'line'
};

const mapDefaultDatasetOptions = data => ({
  ...data,
  datasets:
    data.datasets &&
    data.datasets.map(dataset => ({
      ...defaultDatasetOptions,
      ...dataset
    }))
});

export const ChartLineOnly = props => {
  const { options, data, ...rest } = props;
  return (
    <Chart
      data={mapDefaultDatasetOptions(data)}
      maxHeight={200}
      options={defaultsDeep({}, defaultOptions, options)}
      {...rest}
    />
  );
};

ChartLineOnly.defaultProps = {
  options: {},
  data: {}
};

export default ChartLineOnly;
