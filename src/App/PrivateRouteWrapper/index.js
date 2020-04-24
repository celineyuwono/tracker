import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UiContext } from '@context'

class PrivateRouteWrapper extends Component<Props> {
  static contextType = UiContext

  render() {
    const auth = this.context.auth
    const { children } = this.props

    if (auth) {
      return <Route>{children}</Route>
    } else {
      return (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    }
  }
}

export default PrivateRouteWrapper
