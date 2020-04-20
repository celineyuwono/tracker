// Libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ContainerVertical, ContainerHorizontal } from '@duik/it'
import StgInstagramMedia from './pages/staging/InstagramMedia'
import StgInstagramBatch from './pages/staging/InstagramBatch'
import StgInstagramScrape from './pages/staging/InstagramScrape'
import StgInstagramBatchErrors from './pages/staging/InstagramBatchErrors'
import StgInstagramScrapeErrors from './pages/staging/InstagramScrapeErrors'

// components
import Header from './components/Header'
import TopBarMobile from './components/TopBarMobile'
import Navigation from './components/Navigation'
import NavigationMobile from './components/NavigationMobile'
import UnderConstruction from './components/UnderConstruction'

export const Analytics = () => {
  return (
    <ContainerHorizontal>
      <Navigation />
      <ContainerVertical>
        <TopBarMobile />
        <NavigationMobile />
        <Header />
        <Switch>
          <Route component={UnderConstruction} exact path="/" strict />
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
          <Route
            component={StgInstagramBatchErrors}
            exact
            path="/stg/instagram/batch/errors"
            strict
          />
          <Route
            component={StgInstagramScrapeErrors}
            exact
            path="/stg/instagram/scrape/errors"
            strict
          />
          <Route
            component={UnderConstruction}
            path="/under-construction"
            strict
          />
        </Switch>
      </ContainerVertical>
    </ContainerHorizontal>
  )
}

export default Analytics
