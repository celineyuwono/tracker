import React from 'react'
import {
  TopBar,
  TopBarSection,
  TopBarLinkContainer,
  TopBarLink,
  Button,
} from '@duik/it'

const prodIgMenuLinks = [
  {
    name: 'batch',
    text: 'Batch',
    url: '/prod/instagram/batch',
    active: true,
  },
  {
    name: 'batchErrors',
    text: 'Batch Errors',
    url: '/prod/instagram/batch/errors',
    active: true,
  },
  {
    name: 'profile',
    text: 'Profile Scraping',
    url: '/prod/instagram/profile',
    active: true,
  },
  {
    name: 'profileErrors',
    text: 'Profile Scraping Errors',
    url: '/prod/instagram/profile/errors',
    active: true,
  },
]

const stgIgMenuLinks = [
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
    active: true,
  },
]

const igProd = window.location.pathname.includes('prod/instagram/')
const igStg = window.location.pathname.includes('stg/instagram/')

const AnalyticsHeader = (props) => (
  <TopBar>
    <TopBarSection>
      <TopBarLinkContainer>
        {igProd &&
          prodIgMenuLinks.map((link) => (
            <TopBarLink
              key={link.name}
              href={link.active ? link.url : '/under-construction'}
            >
              {link.text}
            </TopBarLink>
          ))}
        {igStg &&
          stgIgMenuLinks.map((link) => (
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
