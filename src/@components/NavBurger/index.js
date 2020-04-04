import React from 'react';
import classnames from 'classnames';
import Burger from '@animated-burgers/burger-squeeze';
import cls from './nav-burger.module.scss';

export const NavBurger = props => {
  const { className, ...rest } = props;
  return (
    <Burger
      className={classnames(cls['navigation-burger'], className)}
      {...rest}
    />
  );
};
