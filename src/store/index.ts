import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

// types
import { RootState } from '../reducers/state'

// reducers
import { RootReducer } from '../reducers'
// root saga
import rootSaga from '../sagas'

export function configureStore(initialState?: RootState): Store<RootState> {
  const store = createStore(
    RootReducer as any,
    applyMiddleware(sagaMiddleware),
    initialState as any,
  ) as Store<RootState>
  sagaMiddleware.run(rootSaga as any)
  return store
}
