import React from 'react'
import { UiContext } from '@context'
import {
  useLocalStorage,
  processInstagramBatch,
  getStgInstagramUsers,
} from '@utils'

const GlobalStateWrapper = ({ children }) => {
  const [auth, setAuth] = useLocalStorage('auth', false)
  const [stgIgUsersBatch, setStgIgUsersBatch] = useLocalStorage(
    'stgIgUsersBatch',
    []
  )
  return (
    <UiContext.Provider
      value={{
        auth,
        setAuth,
        stgIgUsersBatch,
        setStgIgUsersBatch,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}

// class GlobalStateWrapper extends React.Component {
//   state = {
//     auth: false,
//     stgInstagramUsersBatch: [{ this: 'asf' }],
//     loadStgInstagramUsersBatch: () => {},
//   }

//   loadStgInstagramUsersBatch = () => {
//     getStgInstagramUsers()
//       .then((res) => {
//         return processInstagramBatch(res)
//       })
//       .then((data) => {
//         this.setState({
//           stgInstagramUsersBatch: data,
//         })
//       })
//     console.log(this.state)
//   }

//   setAuth = (value) => {
//     this.setState({
//       auth: value,
//     })
//   }

//   componentDidMount = () => {
//     console.log('state', this.state)
//   }

//   render() {
//     const { children } = this.props
//     return (
//       <UiContext.Provider
//         value={{
//           auth: this.state.auth,
//           stgInstagramUsersBatch: this.state.stgInstagramUsersBatch,
//           setAuth: this.setAuth,
//           // loadStgInstagramUsersBatch: this.loadStgInstagramUsersBatch(),
//         }}
//       >
//         {children}
//       </UiContext.Provider>
//     )
//   }
// }

export default GlobalStateWrapper
