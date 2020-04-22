import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  TopBar,
  TopBarSection,
  TopBarTitle,
  TopBarContainer,
  TopBarLinkContainer,
  TopBarLink,
  Button,
} from '@duik/it'

const menuLinks = [
  {
    name: 'batch',
    text: 'Batch',
    url: '/stg/instagram/batch',
    active: true,
  },
  {
    name: 'batchErrors',
    text: 'Batch Errors',
    url: '/stg/instagram/batch/errors',
    active: true,
  },
  {
    name: 'profile',
    text: 'Profile Scraping',
    url: '/stg/instagram/profile',
    active: true,
  },
  {
    name: 'profileErrors',
    text: 'Profile Scraping Errors',
    url: '/stg/instagram/profile/errors',
    active: !!window.location.pathname.includes('stg'),
  },
]

const AnalyticsHeader = (props) => (
  <TopBar>
    <TopBarSection>
      <TopBarLinkContainer>
        {menuLinks.map((link) => (
          <TopBarLink
            key={link.name}
            href={link.active ? link.url : '/under-construction'}
          >
            {link.text}
          </TopBarLink>
        ))}
      </TopBarLinkContainer>
    </TopBarSection>
    <TopBarSection>
      <Button style={{ marginRight: '10px' }}>Update</Button>
      <Button primary>Logout</Button>
    </TopBarSection>
  </TopBar>
)

export default AnalyticsHeader
