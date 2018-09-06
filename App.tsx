import Router from './src/router'
import React from 'react'

// Reudx
import { Provider } from 'react-redux'
import { store } from './src/store'

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App
