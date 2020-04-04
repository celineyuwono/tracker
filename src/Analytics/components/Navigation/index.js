import * as React from 'react'
import Icon from '@duik/icon'
import * as images from '@exampleAssets'

import {
  NavSection,
  NavLink,
  NavSectionTitle,
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

const menuLinks = [
  {
    text: '全投稿',
    icon: <Icon>gallery_grid_view</Icon>,
  },
  {
    text: 'フィルター後投稿',
    icon: <Icon>calendar</Icon>,
  },
  {
    text: 'ポイント対象投稿',
    icon: <Icon>inbox_paper_round</Icon>,
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
          imgUrl={images.a21}
          name="Martha Blair"
          textTop="Art Director"
        />

        <NavLinkAnalyticsContainer>
          {menuLinks.map((link) => (
            <NavLinkAnalytics
              key={link.text}
              className={link.text === 'Dashboard' ? 'active' : null}
              icon=""
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
