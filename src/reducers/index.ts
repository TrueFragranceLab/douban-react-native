import { combineReducers } from 'redux'
import { RootState } from './state'

// reducers
import { MovieReducer } from './movie'

export const RootReducer = combineReducers<RootState>({
  movies: MovieReducer,
})
