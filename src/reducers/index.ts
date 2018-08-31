import { combineReducers } from 'redux'
import { RootState } from './state'

// reducers
import { TodoReducer } from './todo'
import { FuckReducer } from './fuck'

export const RootReducer = combineReducers<RootState>({
  todos: TodoReducer,
  fuck: FuckReducer,
})
