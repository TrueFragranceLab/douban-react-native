export enum ActionTypes {
  GET_MOVIE_REQUEST = 'GET_MOVIE_REQUEST',
  GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS',
  GET_MOVIE_FAILED = 'GET_MOVIE_FAILED',
}

export type TMovieActions = {
  type: String
  movies: []
}

export const getMovieData = (): TMovieActions => ({
  type: ActionTypes.GET_MOVIE_REQUEST,
  movies: [],
})
