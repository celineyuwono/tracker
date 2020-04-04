import { createSimpleComponent } from '@duik/it';
import cls from './messages.module.scss';

export const MessageImageContainer = createSimpleComponent({
  displayName: 'MessageImageContainer',
  Component: 'div',
  className: cls['message-image-container']
});

export default MessageImageContainer;
