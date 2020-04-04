import React from 'react';
import classnames from 'classnames';

import cls from './icon-headline.module.scss';

export const IconHeadline = ({
  icon,
  title,
  description,
  className,
  ...rest
}: IconHeadlineProps) => (
  <div className={classnames(cls['icon-headline'], className)} {...rest}>
    {icon && <div className={cls['icon-headline-icon']}>{icon}</div>}
    <div className={cls['icon-headline-content']}>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  </div>
);

IconHeadline.defaultProps = {
  className: null,
  icon: null,
  title: null,
  description: null
};

export default IconHeadline;
