export enum ActionTypes {
  GET_MOVIE = 'GET_MOVIE',
}

export type TMovieActions = {
  type: String
  moves: []
}

export const getMovieData = (): TMovieActions => ({
  type: ActionTypes.GET_MOVIE,
  moves: [],
})
