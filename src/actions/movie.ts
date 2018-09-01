import { MovieTypeEnum, getMovieList } from '../services/movie'

export namespace MovieActions {
  export enum Type {
    GET_MOVIE = 'GET_MOVIE',
  }
}

export type MovieActions = {
  type: String
  moves: []
}

function fetchMovieData() {
  getMovieList(MovieTypeEnum.HOT)
    .then(res => res.json())
    .then(res => {
      const movies = res.subjects
    })
    .catch(error => {
      console.log(error)
    })
}

export function getMovieData() {
  return {
    type: MovieActions.Type.GET_MOVIE,
  }
}
