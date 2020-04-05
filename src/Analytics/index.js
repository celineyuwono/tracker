// Libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ContainerVertical, ContainerHorizontal } from '@duik/it'
import Home from './home'

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
          <Route component={Home} exact path="/" strict />
        </Switch>
      </ContainerVertical>
    </ContainerHorizontal>
  )
}

export default Analytics
