import { MoiveState } from './state'
import { MovieActions } from '../actions/movie'

export const initialState: MoiveState[] = []

export const MovieReducer = (
  state = initialState,
  action: MovieActions,
): MoiveState[] => {
  switch (action.type) {
    case MovieActions.Type.GET_MOVIE:
      return state

    default:
      return state
  }
}
