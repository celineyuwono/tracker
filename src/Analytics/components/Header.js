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
    text: 'BatchErrors',
    url: '/stg/instagram/batch/errors',
    active: true,
  },
  {
    name: 'scrape',
    text: 'Scrape',
    url: '/stg/instagram/scrape',
    active: true,
  },
  {
    name: 'scrapeErrors',
    text: 'Scrape Errors',
    url: '/stg/instagram/scrape/errors',
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
