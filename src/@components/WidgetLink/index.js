import React from 'react';
import classnames from 'classnames';
import cls from './widget-link.module.scss';

import IconWrap from '../IconWrap';
export const WidgetLink = ({
  className,
  Component = 'a',
  icon,
  title,
  rightEl,
  ...rest
}) => (
  <Component className={classnames(cls['card-link'], className)} {...rest}>
    {icon && <IconWrap {...icon} className={cls['card-link-icon']} />}
    <span className={cls['card-link-title']}>{title}</span>
    {rightEl && <span className={cls['card-link-count']}>{rightEl}</span>}
  </Component>
);

WidgetLink.defaultProps = {
  className: null,
  Component: 'a',
  icon: null,
  rightEl: null
};

export default WidgetLink;
