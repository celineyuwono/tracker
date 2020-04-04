import * as React from 'react'
import Icon from '@duik/icon'
import * as images from '@exampleAssets'

import {
  NavSection,
  NavLink,
  NavSectionTitle,
  NavTitle,
  TopBar,
  TopBarSection,
  NavPanel,
  ContainerVertical,
  ScrollArea,
  TopBarLink,
  TopBarLinkContainer,
} from '@duik/it'

import NavLinkAnalyticsContainer from '../NavLinkAnalyticsContainer'
import NavLinkAnalytics from '../NavLinkAnalytics'

import NavUser from '../NavUser'

import cls from './analytics-navigation.module.scss'

const stgMenuLinks = [
  {
    text: 'Twitter',
    icon: <Icon>gallery_grid_view</Icon>,
    component: 'StgTwitter',
    url: 'stg/twitter',
  },
  {
    text: 'Instagram',
    icon: <Icon>calendar</Icon>,
    component: 'StgInstagram',
    url: 'stg/instagram',
  },
  {
    text: 'Blog',
    icon: <Icon>inbox_paper_round</Icon>,
    component: 'StgBlog',
    url: 'stg/blog',
  },
]

const prodMenuLinks = [
  {
    text: 'Twitter',
    icon: <Icon>gallery_grid_view</Icon>,
    component: 'ProdTwitter',
    url: '/prod/twitter',
  },
  {
    text: 'Instagram',
    icon: <Icon>calendar</Icon>,
    component: 'ProdInstagram',
    url: '/prod/instagram',
  },
  {
    text: 'Blog',
    icon: <Icon>inbox_paper_round</Icon>,
    component: 'ProdBlog',
    url: '/prod/blog',
  },
]

const AnalyticsNavigation = () => (
  <NavPanel className={cls['analytics-navigation']}>
    <ContainerVertical>
      <TopBar className={cls['analytics-navigation-top-bar']}>
        <TopBarSection>
          <TopBarLinkContainer>
            <TopBarLink href="/">HOME</TopBarLink>
          </TopBarLinkContainer>
        </TopBarSection>
      </TopBar>
      <ScrollArea>
        <NavUser
          imgUrl={images.radar}
          name="Tracker"
          textTop="AP2 Scraping Time Tracker"
        />
        <NavTitle>Staging</NavTitle>
        <NavLinkAnalyticsContainer>
          {stgMenuLinks.map(link => (
            <NavLinkAnalytics
              key={link.text}
              className={link.text === 'Dashboard' ? 'active' : null}
              icon=""
            >
              <strong>{link.text}</strong>
            </NavLinkAnalytics>
          ))}
        </NavLinkAnalyticsContainer>
        <NavTitle>Production</NavTitle>
        <NavLinkAnalyticsContainer>
          {prodMenuLinks.map(link => (
            <NavLinkAnalytics
              key={link.text}
              className={link.text === 'Dashboard' ? 'active' : null}
              icon=""
              url={link.url}
            >
              <strong>{link.text}</strong>
            </NavLinkAnalytics>
          ))}
        </NavLinkAnalyticsContainer>
      </ScrollArea>
    </ContainerVertical>
  </NavPanel>
)

export default AnalyticsNavigation
