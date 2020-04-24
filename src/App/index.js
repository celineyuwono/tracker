import React from 'react'
import '@duik/it/dist/styles.css'
import '@duik/icon/dist/styles.css'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import './app.module.scss'

import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Analytics } from 'Analytics'
import Login from './Login'
import PrivateRouteWrapper from './PrivateRouteWrapper'

const App = () => {
  const UiContext = React.createContext()
  const handleLogin = () => {
    window.location = '/'
  }
  // <UiContext.Provider> wrap around Browser Router

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          component={() => <Login handleLogin={handleLogin} />}
        />
        <PrivateRouteWrapper>
          <Switch>
            <Route path="/" component={() => <Analytics />} />
          </Switch>
        </PrivateRouteWrapper>
      </Switch>
    </BrowserRouter>
  )
}

export default App
