import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UiContext } from '@context'

class PrivateRouteWrapper extends Component<Props> {
  static contextType = UiContext
  componentDidMount() {
    console.log('Auth: (Private Route)', this.context.auth)
  }
  render() {
    const { children } = this.props

    if (this.context.auth) {
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
