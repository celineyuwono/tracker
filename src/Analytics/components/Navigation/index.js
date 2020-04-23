import * as React from 'react'
import * as images from '@assets'

import {
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

const prodMenuLinks = [
  {
    text: 'Twitter',
    component: 'ProdTwitter',
    url: '/prod/twitter/batch',
    active: false,
  },
  {
    text: 'Instagram',
    component: 'ProdInstagram',
    url: '/prod/instagram/batch',
    active: true,
  },
  {
    text: 'Blog',
    component: 'ProdBlog',
    url: '/prod/blog/batch',
    active: false,
  },
]

const stgMenuLinks = [
  {
    text: 'Twitter',
    component: 'StgTwitter',
    url: '/stg/twitter/batch',
    active: false,
  },
  {
    text: 'Instagram',
    component: 'StgInstagram',
    url: '/stg/instagram/batch',
    active: true,
  },
  {
    text: 'Blog',
    component: 'StgBlog',
    url: '/stg/blog/batch',
    active: false,
  },
]

// const devMenuLinks = [
//   {
//     text: 'Twitter',
//     component: 'DevTwitter',
//     url: '/dev/twitter/batch',
//     active: false,
//   },
//   {
//     text: 'Instagram',
//     component: 'DevInstagram',
//     url: '/dev/instagram/batch',
//     active: false,
//   },
//   {
//     text: 'Blog',
//     component: 'DevBlog',
//     url: '/dev/blog/batch',
//     active: false,
//   },
// ]

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
        <NavTitle>Production</NavTitle>
        <NavLinkAnalyticsContainer>
          {prodMenuLinks.map((link) => (
            <NavLinkAnalytics
              key={link.text}
              className={link.text === 'Dashboard' ? 'active' : null}
              icon=""
              href={link.active ? link.url : '/under-construction'}
            >
              <strong>{link.text}</strong>
            </NavLinkAnalytics>
          ))}
        </NavLinkAnalyticsContainer>
        <NavTitle>Staging</NavTitle>
        <NavLinkAnalyticsContainer>
          {stgMenuLinks.map((link) => (
            <NavLinkAnalytics
              key={link.text}
              className={link.text === 'Dashboard' ? 'active' : null}
              icon=""
              href={link.active ? link.url : '/under-construction'}
            >
              <strong>{link.text}</strong>
            </NavLinkAnalytics>
          ))}
        </NavLinkAnalyticsContainer>
        {/* <NavTitle>Develop</NavTitle>
        <NavLinkAnalyticsContainer>
          {devMenuLinks.map((link) => (
            <NavLinkAnalytics
              key={link.text}
              className={link.text === 'Dashboard' ? 'active' : null}
              icon=""
              url={link.url}
            >
              <strong>{link.text}</strong>
            </NavLinkAnalytics>
          ))}
        </NavLinkAnalyticsContainer> */}
      </ScrollArea>
    </ContainerVertical>
  </NavPanel>
)

export default AnalyticsNavigation
