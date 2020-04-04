import React from 'react';
import classnames from 'classnames';

import cls from './status-dot.module.scss';

// type StatusDotProps = {
//   className?: String,
//   Component?: React.ElementType,
//   children?: React.Node,
//   color?: 'green' | 'orange' | 'red' | 'grey',
// }

export const StatusDot = ({
  children,
  className,
  color,
  name,
  Component,
  fill,
  ...rest
}) => (
  <span
    className={classnames(cls['status-dot'], className, {
      [color]: color
    })}
    {...rest}
  >
    {children}
  </span>
);

StatusDot.defaultProps = {
  className: null,
  children: null,
  color: 'green'
};

export default StatusDot;
