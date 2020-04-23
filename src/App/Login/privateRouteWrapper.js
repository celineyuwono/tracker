// @flow

import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

class PrivateRouteWrapper extends Component<Props> {
  render() {
    const auth = true // Change here to redirect to login BOB
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
