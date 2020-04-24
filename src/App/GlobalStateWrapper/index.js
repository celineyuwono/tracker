import React from 'react'
import { UiContext } from '@context'
import { processInstagramBatch, getStgInstagramUsers } from '@utils'

class GlobalStateWrapper extends React.Component {
  state = {
    auth: false,
    stgInstagramUsersBatch: [{ this: 'asf' }],
    loadStgInstagramUsersBatch: () => {},
  }

  loadStgInstagramUsersBatch = () => {
    getStgInstagramUsers()
      .then((res) => {
        return processInstagramBatch(res)
      })
      .then((data) => {
        this.setState({
          stgInstagramUsersBatch: data,
        })
      })
    console.log(this.state)
  }

  setAuth = (value) => {
    this.setState({
      auth: value,
    })
    console.log('asdfasdfasdfasdf')
  }

  render() {
    const { children } = this.props
    return (
      <UiContext.Provider
        value={{
          auth: this.state.auth,
          stgInstagramUsersBatch: this.state.stgInstagramUsersBatch,
          setAuth: this.setAuth,
          // loadStgInstagramUsersBatch: this.loadStgInstagramUsersBatch(),
        }}
      >
        {children}
      </UiContext.Provider>
    )
  }
}

export default GlobalStateWrapper
