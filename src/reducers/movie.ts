import { MoiveState } from './state'
import { TMovieActions, ActionTypes } from '../actions/movie'
import { MovieTypeEnum, getMovieList } from '../services/movie'

export const initialState: MoiveState[] = []

async function fetchMovieData() {
  const res = await getMovieList(MovieTypeEnum.HOT)
  const data = await res.json()
  return data.subjects
}

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
