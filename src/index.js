import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider>
      <App />
    </Provider>,
    rootElement
  )
} else {
  render(<App />, rootElement)
}

serviceWorker.unregister()
