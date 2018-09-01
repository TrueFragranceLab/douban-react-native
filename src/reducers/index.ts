import { combineReducers } from 'redux'
import { RootState } from './state'

// reducers
import { TodoReducer } from './todo'
import { FuckReducer } from './fuck'
import { MovieReducer } from './movie'

export const RootReducer = combineReducers<RootState>({
  todos: TodoReducer,
  fuck: FuckReducer,
  movies: MovieReducer,
})
