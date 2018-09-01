import Router from './src/router'
import React from 'react'

// Reudx
import { Provider } from 'react-redux'
import { configureStore } from './src/store'
const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App
