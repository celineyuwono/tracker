import React from 'react';
import classnames from 'classnames';

import cls from './map-pin-circle.module.scss';

export const MapPinCircle = ({ children, className, color, ...rest }) => (
  <div
    className={classnames(cls['map-pin-circle'], className, {
      [color]: color
    })}
    {...rest}
  >
    {children}
  </div>
);

MapPinCircle.defaultProps = {
  className: null,
  children: null,
  color: 'blue'
};

export default MapPinCircle;
