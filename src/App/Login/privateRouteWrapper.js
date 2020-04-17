// @flow

import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import moment from 'moment'

class PrivateRouteWrapper extends Component<Props> {
  state = {
    auth: true,
  }
  componentDidMount() {
    const username = 'Hello'
    const password = 'hello1'

    if ((username === 'Hello') & (password === 'hello1')) {
      this.setState({ auth: true })
    }
  }

  render() {
    const { auth } = this.state
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
