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

const AnalyticsHeader = props => (
  <TopBar>
    <TopBarSection>
      <TopBarLinkContainer>
        <TopBarLink href="/all">All</TopBarLink>
        <TopBarLink href="/scraped" className="active" href="/scraped">
          Scraped
        </TopBarLink>
        <TopBarLink href="/points" className="active" href="/points">
          Points
        </TopBarLink>
      </TopBarLinkContainer>
    </TopBarSection>
    <TopBarSection>
      <Button primary>Logout</Button>
    </TopBarSection>
  </TopBar>
)

export default AnalyticsHeader
