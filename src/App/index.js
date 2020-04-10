import React from 'react'

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

const RootRoute = (props) => {
  const uiContext = React.useContext(UiContext)

  React.useEffect(() => {
    // on route change, we hide the menus
    uiContext.menu.handleClose()
    uiContext.filter.handleClose()
  }, [props.location.pathname]) // eslint-disable-line

  return (
    <>
      <Navigator />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Analytics} />
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
