// Libraries
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@duik/icon';
import { TabContainer, TabItem } from '@duik/it';
import cls from './analytics-mobile-nav.module.scss';

const tabItems = [
  {
    to: '/',
    content: <Icon>gallery_grid_view</Icon>
  },
  {
    to: '/calendar',
    content: <Icon>calendar</Icon>
  },
  {
    to: '/inbox',
    content: <Icon>inbox_paper_round</Icon>
  },
  {
    to: '/invocing',
    content: <Icon>money_round</Icon>
  },
  {
    to: '/lab',
    content: <Icon>container</Icon>
  }
];

export const NavigationMobile = () => {
  return (
    <TabContainer xs className={cls['analytics-mobile-nav']}>
      {tabItems.map(item => (
        <TabItem
          key={item.to}
          activeClassName="active"
          className={cls['analytics-mobile-nav']}
          Component={NavLink}
          to={`/analytics${item.to}`}
        >
          {item.content}
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default NavigationMobile;
