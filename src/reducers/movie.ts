import { MoiveState } from './state'
import { TMovieActions, ActionTypes } from '../actions/movie'
import { MovieTypeEnum, getMovieList } from '../services/movie'

export const initialState: MoiveState[] = [
  {
    title: '蜘蛛侠',
  },
  {
    title: '钢铁侠',
  },
]

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
    case ActionTypes.GET_MOVIE:
      return state
    default:
      return state
  }
}
