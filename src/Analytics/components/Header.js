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
        <TopBarLink href="/twitter">Twitter</TopBarLink>
        <TopBarLink href="/instagram" className="active" href="/instagram">
          Instagram
        </TopBarLink>
        <TopBarLink href="/blog" className="active" href="/blog">
          Blog
        </TopBarLink>
      </TopBarLinkContainer>
    </TopBarSection>
    <TopBarSection>
      <Button primary>Logout</Button>
    </TopBarSection>
  </TopBar>
)

export default AnalyticsHeader
