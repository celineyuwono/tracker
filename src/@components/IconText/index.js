import React from 'react';
import classnames from 'classnames';

import cls from './icon-text.module.scss';

export const IconText = props => {
  const {
    icon,
    children,
    highlight,
    textHighlight,
    className,
    ...rest
  } = props;

  return (
    <div
      className={classnames(cls['icon-text'], className, {
        [cls['icon-text-highlight']]: highlight,
        [cls['icon-text-text-highlight']]: textHighlight
      })}
      {...rest}
    >
      {icon}
      <span className={cls['icon-text-text']}>{children}</span>
    </div>
  );
};

IconText.defaultProps = {
  className: null,
  highlight: false,
  textHighlight: false
};

export default IconText;
