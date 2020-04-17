// Libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ContainerVertical, ContainerHorizontal } from '@duik/it'
import StgInstagramMedia from './pages/staging/InstagramMedia'
import StgTwitterBatch from './pages/staging/TwitterBatch'

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
            component={StgTwitterBatch}
            exact
            path="/stg/twitter/batch"
            strict
          />
        </Switch>
      </ContainerVertical>
    </ContainerHorizontal>
  )
}

export default Analytics
