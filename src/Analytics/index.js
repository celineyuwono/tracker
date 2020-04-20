// Libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ContainerVertical, ContainerHorizontal } from '@duik/it'
import StgInstagramMedia from './pages/staging/InstagramMedia'
import StgInstagramBatch from './pages/staging/InstagramBatch'
import StgInstagramScrape from './pages/staging/InstagramScrape'

// components
import Header from './components/Header'
import TopBarMobile from './components/TopBarMobile'
import Navigation from './components/Navigation'
import NavigationMobile from './components/NavigationMobile'

export const Analytics = () => {
  return (
    <ContainerHorizontal>
      <Navigation />
      <ContainerVertical>
        <TopBarMobile />
        <NavigationMobile />
        <Header />
        <Switch>
          <Route
            component={StgInstagramMedia}
            exact
            path="/stg/instagram/media"
            strict
          />
          <Route
            component={StgInstagramBatch}
            exact
            path="/stg/instagram/batch"
            strict
          />
          <Route
            component={StgInstagramScrape}
            exact
            path="/stg/instagram/scrape"
            strict
          />
        </Switch>
      </ContainerVertical>
    </ContainerHorizontal>
  )
}

export default Analytics
