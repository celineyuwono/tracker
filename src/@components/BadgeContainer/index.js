import { createSimpleComponent } from '@duik/it';

import cls from './badge-container.module.scss';

export const BadgeContainer = createSimpleComponent({
  displayName: 'BadgeContainer',
  className: cls['badge-container'],
  Component: 'div'
});

export default BadgeContainer;
