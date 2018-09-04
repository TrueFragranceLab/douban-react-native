import { MoiveState } from './state'
import { TMovieActions, ActionTypes } from '../actions/movie'

export const initialState: MoiveState[] = []

export const MovieReducer = (
  state = initialState,
  action: TMovieActions,
): MoiveState[] => {
  switch (action.type) {
    case ActionTypes.GET_MOVIE_SUCCESS:
      return action.movies
    default:
      return state
  }
}
