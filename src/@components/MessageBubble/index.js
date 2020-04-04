import React from 'react';
import classnames from 'classnames';

import cls from './messages.module.scss';

export const MessageBubble = ({ className, Component, children, position }) => (
  <div
    className={classnames(cls['message-bubble'], className, {
      [cls[position]]: position
    })}
  >
    {children}
  </div>
);

MessageBubble.defaultProps = {
  className: null,
  children: null,
  position: 'left'
};

export default MessageBubble;
