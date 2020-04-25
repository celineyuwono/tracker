import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UiContext } from '@context'
import jwt from 'jsonwebtoken'
import moment from 'moment'

class PrivateRouteWrapper extends Component<Props> {
  static contextType = UiContext
  componentDidMount() {
    const decoded = jwt.decode(this.context.token)
    // Expires in 1 day after login
    if (decoded) {
      const expiryDate = moment(new Date(decoded.exp))
      if (moment().isAfter(expiryDate)) {
        window.location.pathname = '/login'
      }
    } else {
      window.location.pathname = '/login'
    }
  }

  render() {
    const { children } = this.props

    if (this.context.token) {
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
