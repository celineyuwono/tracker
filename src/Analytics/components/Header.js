import React from 'react'
import {
  TopBar,
  TopBarSection,
  TopBarTitle,
  TopBarContainer,
  TopBarLinkContainer,
  TopBarLink,
  Button,
} from '@duik/it'

const AnalyticsHeader = (props) => (
  <TopBar>
    <TopBarSection>
      <TopBarLinkContainer>
        <TopBarLink href="/stg/instagram/batch" className="active">
          Batch
        </TopBarLink>
        <TopBarLink href="/stg/instagram/batch/errors" className="active">
          Batch Errors
        </TopBarLink>
        <TopBarLink href="/stg/instagram/scrape" className="active">
          Scrape
        </TopBarLink>
        <TopBarLink href="/stg/instagram/scrape/errors" className="active">
          Scrape Errors
        </TopBarLink>
      </TopBarLinkContainer>
    </TopBarSection>
    <TopBarSection>
      <Button primary>Logout</Button>
    </TopBarSection>
  </TopBar>
)

export default AnalyticsHeader
