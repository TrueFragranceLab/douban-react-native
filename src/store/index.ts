import { Store, createStore } from 'redux'

// types
import { RootState } from '../reducers/state'

// reducers
import { RootReducer } from '../reducers'

export function configureStore(initialState?: RootState): Store<RootState> {
  const store = createStore(RootReducer as any, initialState as any) as Store<
    RootState
  >
  return store
}
