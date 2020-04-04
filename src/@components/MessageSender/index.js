import React from 'react';
import classnames from 'classnames';

import cls from './messages.module.scss';

export const MessageSender = props => {
  const { className, children, time, ...rest } = props;

  return (
    <div className={classnames(cls['message-sender'], className)} {...rest}>
      {children}
      {time && <span className={cls['message-time-sent']}>{time}</span>}
    </div>
  );
};

MessageSender.defaultProps = {
  className: null,
  children: null,
  time: null
};

export default MessageSender;
