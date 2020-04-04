import React from 'react';
import classnames from 'classnames';

import { Widget } from '@duik/it';
import Icon from '@duik/icon';

import cls from './widget-chart-summary.module.scss';
import ChartLineOnly from '../ChartLineOnly';

export const WidgetChartSummary = ({
  className,
  data,
  label,
  value,
  diff,
  ...rest
}) => {
  const isUp = diff >= 0;
  const diffPercentage = Number(parseFloat(diff) * 100).toFixed(2);
  return (
    <Widget
      className={classnames(cls['widget-chart-summary'], className)}
      padding
      {...rest}
    >
      {label && (
        <span className={cls['widget-chart-summary-label']}>{label}</span>
      )}
      {value && (
        <span className={cls['widget-chart-summary-value']}>{value}</span>
      )}
      {diff && (
        <span
          className={classnames(cls['widget-chart-summary-diff'], {
            [cls['widget-chart-summary-down']]: !isUp
          })}
        >
          {`${isUp ? '+' : ''}${diffPercentage}%`}
          <Icon className={cls['widget-chart-summary-icon']}>
            {isUp ? 'trending_up' : 'trending_down'}
          </Icon>
        </span>
      )}
      <ChartLineOnly
        className={cls['widget-chart-summary-chart']}
        data={data}
        maxHeight={50}
      />
    </Widget>
  );
};

WidgetChartSummary.defaultProps = {
  className: null,
  value: null,
  label: null,
  diff: null
};

export default WidgetChartSummary;
