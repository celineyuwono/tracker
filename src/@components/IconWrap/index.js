import React from 'react';
import classnames from 'classnames';

import Icon from '@duik/icon';
import cls from './icon-wrap.module.scss';

export const IconWrap = ({ className, color, name, type, ...rest }) => (
  <div
    className={classnames(cls['icon-wrap'], className, {
      [color]: color,
      [cls[type]]: type
    })}
    {...rest}
  >
    <Icon>{name}</Icon>
  </div>
);

IconWrap.defaultProps = {
  className: null,
  color: null,
  name: null,
  type: 'circle'
};

export default IconWrap;
