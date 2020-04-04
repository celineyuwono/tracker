import React from 'react';
import classnames from 'classnames';

import cls from './messages.module.scss';

export const MessageContainer = ({
  className,
  Component,
  children,
  position
}) => (
  <div
    className={classnames(cls['message-container'], className, {
      [cls[position]]: position
    })}
  >
    {children}
  </div>
);

MessageContainer.defaultProps = {
  className: null,
  children: null,
  position: 'left'
};

export default MessageContainer;
