import React from 'react'
import '@duik/it/dist/styles.css'
import '@duik/icon/dist/styles.css'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import './app.module.scss'

import { UiContext } from '@context'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Analytics } from 'Analytics'

import Login from './Login'
import PrivateRouteWrapper from './PrivateRouteWrapper'
import GlobalStateWrapper from './GlobalStateWrapper'

class App extends React.Component {
  render() {
    return (
      <GlobalStateWrapper>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRouteWrapper>
              <Switch>
                <Route path="/" component={Analytics} />
              </Switch>
            </PrivateRouteWrapper>
          </Switch>
        </BrowserRouter>
      </GlobalStateWrapper>
    )
  }
}

export default App
