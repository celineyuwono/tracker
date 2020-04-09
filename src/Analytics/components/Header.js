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
        <TopBarLink href="/scraped" className="active" href="/scraped">
          (1) Batch -> DB
        </TopBarLink>
        <TopBarLink href="/points" className="active" href="/points">
          (2) DB -> CSV -> 管理画面
        </TopBarLink>
      </TopBarLinkContainer>
    </TopBarSection>
    <TopBarSection>
      <Button primary>Logout</Button>
    </TopBarSection>
  </TopBar>
)

export default AnalyticsHeader
