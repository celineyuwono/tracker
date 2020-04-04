import React from 'react';
import classnames from 'classnames';

import cls from './tutorial-list.module.scss';

export const TutorialList = ({ children, className, ...rest }) => (
  <div className={classnames(cls['tutorial-list'], className)} {...rest}>
    {children}
  </div>
);

TutorialList.defaultProps = {
  className: null
};

export default TutorialList;
