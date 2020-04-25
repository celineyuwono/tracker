import React from 'react'
import {
  TopBar,
  TopBarSection,
  TopBarLinkContainer,
  TopBarLink,
  Button,
} from '@duik/it'
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { UiContext } from '@context'
import cls from './analytics-header.module.scss'

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
const path = window.location.pathname
const igProd = path.includes('prod/instagram/')
const igStg = path.includes('stg/instagram/')

const AnalyticsHeader = (props) => (
  <UiContext.Consumer>
    {(context) => (
      <TopBar className={cls['analytics-header-links']}>
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
          <Link to={window.location.pathname} style={{ color: 'gray' }}>
            {igProd || igStg ? (
              <Button
                style={{ marginRight: '10px', width: '80px' }}
                onClick={() => {
                  context.setUpdateUrl(path)
                }}
              >
                {!context.updateUrl ? (
                  'Update'
                ) : (
                  <CircularProgress style={{ zoom: 0.5 }} />
                )}
              </Button>
            ) : (
              ''
            )}
          </Link>
          <Link to="/login" style={{ color: 'white' }}>
            <Button
              primary
              style={{ backgroundColor: '#303FA0', width: '80px' }}
            >
              Logout
            </Button>
          </Link>
        </TopBarSection>
      </TopBar>
    )}
  </UiContext.Consumer>
)

export default AnalyticsHeader
