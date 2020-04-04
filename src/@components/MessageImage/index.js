import React from 'react';
import classnames from 'classnames';

import cls from './messages.module.scss';

export const MessageImage = ({
  className,
  div,
  children,
  imgUrl,
  style,
  ...rest
}) => (
  <div
    className={classnames(cls['message-image'], className)}
    style={{
      ...style,
      ...(imgUrl
        ? {
            backgroundImage: `url("${imgUrl}")`
          }
        : {})
    }}
    {...rest}
  >
    {children}
  </div>
);

MessageImage.defaultProps = {
  className: null,
  children: null,
  imgUrl: null,
  style: {}
};

export default MessageImage;
