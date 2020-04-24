// Libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ContainerVertical, ContainerHorizontal } from '@duik/it'
import ProdInstagramBatch from './pages/production/InstagramBatch'
import ProdInstagramProfile from './pages/production/InstagramProfile'
import ProdInstagramBatchErrors from './pages/production/InstagramBatchErrors'
import ProdInstagramProfileErrors from './pages/production/InstagramProfileErrors'
import StgInstagramBatch from './pages/staging/InstagramBatch'
import StgInstagramProfile from './pages/staging/InstagramProfile'
import StgInstagramBatchErrors from './pages/staging/InstagramBatchErrors'
import StgInstagramProfileErrors from './pages/staging/InstagramProfileErrors'

// components
import Header from './components/Header'
import TopBarMobile from './components/TopBarMobile'
import Navigation from './components/Navigation'
import NavigationMobile from './components/NavigationMobile'
import UnderConstruction from './components/UnderConstruction'

export const Analytics = (data) => {
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
            component={() => <ProdInstagramBatch />}
            exact
            path="/prod/instagram/batch"
            strict
          />
          <Route
            component={() => <ProdInstagramProfile />}
            exact
            path="/prod/instagram/profile"
            strict
          />
          <Route
            component={() => <ProdInstagramBatchErrors />}
            exact
            path="/prod/instagram/batch/errors"
            strict
          />
          <Route
            component={() => <ProdInstagramProfileErrors />}
            exact
            path="/prod/instagram/profile/errors"
            strict
          />
          <Route
            component={() => <StgInstagramBatch />}
            exact
            path="/stg/instagram/batch"
            strict
          />
          <Route
            component={() => <StgInstagramProfile />}
            exact
            path="/stg/instagram/profile"
            strict
          />
          <Route
            component={() => <StgInstagramBatchErrors />}
            exact
            path="/stg/instagram/batch/errors"
            strict
          />
          <Route
            component={() => <StgInstagramProfileErrors />}
            exact
            path="/stg/instagram/profile/errors"
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
