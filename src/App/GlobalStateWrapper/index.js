import React from 'react'
import { UiContext } from '@context'
import {
  useLocalStorage,
  processInstagramBatch,
  getStgInstagramUsers,
} from '@utils'

const GlobalStateWrapper = ({ children }) => {
  const [token, setToken] = useLocalStorage('token', '')
  const [stgIgUsersBatch, setStgIgUsersBatch] = useLocalStorage(
    'stgIgUsersBatch',
    []
  )
  const [stgIgUsersBatchErr, setStgIgUsersBatchErr] = useLocalStorage(
    'stgIgUsersBatchErr',
    []
  )
  const [stgIgUsersProf, setStgIgUsersProf] = useLocalStorage(
    'stgIgUsersProf',
    []
  )
  const [stgIgUsersProfErr, setStgIgUsersProfErr] = useLocalStorage(
    'stgIgUsersProfErr',
    []
  )
  const [prodIgUsersBatch, setProdIgUsersBatch] = useLocalStorage(
    'prodIgUsersBatch',
    []
  )
  const [prodIgUsersBatchErr, setProdIgUsersBatchErr] = useLocalStorage(
    'prodIgUsersBatchErr',
    []
  )
  const [prodIgUsersProf, setProdIgUsersProf] = useLocalStorage(
    'prodIgUsersProf',
    []
  )
  const [prodIgUsersProfErr, setProdIgUsersProfErr] = useLocalStorage(
    'prodIgUsersProfErr',
    []
  )
  return (
    <UiContext.Provider
      value={{
        token,
        setToken,
        stgIgUsersBatch,
        setStgIgUsersBatch,
        stgIgUsersBatchErr,
        setStgIgUsersBatchErr,
        stgIgUsersProf,
        setStgIgUsersProf,
        stgIgUsersProfErr,
        setStgIgUsersProfErr,
        prodIgUsersBatch,
        setProdIgUsersBatch,
        prodIgUsersBatchErr,
        setProdIgUsersBatchErr,
        prodIgUsersProf,
        setProdIgUsersProf,
        prodIgUsersProfErr,
        setProdIgUsersProfErr,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}

export default GlobalStateWrapper
