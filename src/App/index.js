import React from 'react'
import axios from 'axios'
import '@duik/it/dist/styles.css'
import '@duik/icon/dist/styles.css'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import './app.module.scss'

import { UiContext } from '@context'

import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { Analytics } from 'Analytics'
import { useMenuVisibility } from '@utils'

import Navigator from './Navigator'
import Login from './Login'
import PrivateRouteWrapper from './Login/privateRouteWrapper'

const RootRoute = (props) => {
  const uiContext = React.useContext(UiContext)

  const [loginInfo, setLoginInfo] = React.useState(2)

  const handleLogin = (allowLogin) => {
    console.log('allow login: ', allowLogin)
  }

  React.useEffect(() => {
    // on route change, we hide the menus
    uiContext.menu.handleClose()
    uiContext.filter.handleClose()
  }, [props.location.pathname]) // eslint-disable-line

  return (
    <>
      <Navigator />
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
    </>
  )
}

const App = () => {
  const menu = useMenuVisibility(false)
  const filter = useMenuVisibility(false)

  const contextValue = {
    menu,
    filter,
  }

  return (
    <UiContext.Provider value={contextValue}>
      <BrowserRouter>
        <Route path="/" component={RootRoute} />
      </BrowserRouter>
    </UiContext.Provider>
  )
}

export default App
