import React from 'react'
import '@duik/it/dist/styles.css'
import '@duik/icon/dist/styles.css'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import './app.module.scss'

import { UiContext } from '@context'

import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Analytics } from 'Analytics'
import { useMenuVisibility } from '@utils'

import Login from './Login'
import PrivateRouteWrapper from './PrivateRouteWrapper'

const App = () => {
  const uiContext = React.useContext(UiContext)

  const handleLogin = () => {
    window.location = '/'
  }
  return (
    <UiContext.Provider>
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            component={() => <Login handleLogin={handleLogin} />}
          />
          <PrivateRouteWrapper>
            <Switch>
              <Route path="/" component={Analytics} />
            </Switch>
          </PrivateRouteWrapper>
        </Switch>
      </BrowserRouter>
    </UiContext.Provider>
  )
}

export default App
