import React, { PureComponent } from 'react';
import classnames from 'classnames';
import defaultsDeep from 'lodash.defaultsdeep';
import { defaults as chartjsDefaults } from 'react-chartjs-2';

import createCustomTooltip from './CustomTooltip';
import cls from './chartjs.module.scss';

import getDefaultOptions from './getDefaultOptions';

chartjsDefaults.global.defaultFontFamily = 'Roboto';

const getChart = chartType => require('react-chartjs-2')[chartType]; // eslint-disable-line

export class Chart extends PureComponent {
  static defaultProps = {
    options: {},
    valueFormatter: e => e,
    minHeight: 0,
    maxHeight: 400,
    height: null,
    width: null,
    tooltipRenderer: undefined,
    chartType: 'Line',
    className: null
  };

  tooltipRef = React.createRef();
  canvasWrapperRef = React.createRef();

  state = {
    size: {
      width: null,
      height: null
    }
  };

  componentDidMount() {
    this.setCanvasSize();
    if (window) {
      window.addEventListener('resize', this.setCanvasSize, true);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.setCanvasSize, true);
    }
  }

  setCanvasSize = () => {
    // responsive
    const {
      canvasWrapperRef: { current: wrapperEl }
    } = this;

    const {
      minHeight,
      maxHeight,
      height: defaultHeight,
      width: defaultWidth
    } = this.props;

    if (wrapperEl) {
      const width = defaultWidth || Math.min(wrapperEl.clientWidth, 4000);
      const height =
        defaultHeight ||
        Math.max(Math.min(wrapperEl.clientWidth / 2.3, maxHeight), minHeight);
      this.setState({
        size: {
          width,
          height
        }
      });
    }
  };

  render() {
    const {
      data,
      options = {},
      valueFormatter,
      tooltipRenderer,
      chartType,
      className
    } = this.props;

    const Chart = getChart(chartType);

    const finalOptions = defaultsDeep(
      {},
      options,
      {
        tooltips: {
          custom: tooltip =>
            createCustomTooltip(
              this.tooltipRef.current,
              tooltip,
              valueFormatter,
              tooltipRenderer
            )
        }
      },
      getDefaultOptions(valueFormatter)
    );

    const {
      size: { width, height }
    } = this.state;

    const sizecls = {
      width,
      height
    };

    return (
      <div className={classnames(cls['duik-chart-js'], className)}>
        <div
          ref={this.canvasWrapperRef}
          className={cls['duik-chart-js-canvas-wrapper']}
        >
          <div className={cls['duik-chart-js-tooltip-wrapper']} style={sizecls}>
            <Chart data={data} options={finalOptions} redraw {...sizecls} />
            <div ref={this.tooltipRef} className={cls['duik-chart-js-tooltip']}>
              <div className="tooltip__content">
                <table />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
