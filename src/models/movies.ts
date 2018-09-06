import { createModel } from '@rematch/core'
import { getMovieList } from '../services/movies'

export interface movieItem {
  title: string
  id: string
  images: {
    large: string
  }
  rating: {
    rating: number
  }
  directors: [Directors]
  casts: [Casts]
}

interface Directors {
  name: string
}

interface Casts {
  name: string
}

export type movieState = {
  readonly movies: []
}

export const movies = createModel({
  state: {
    movies: [],
  },
  reducers: {
    loadMovieData: (state: movieState, data: []) => ({
      movies: state.movies.concat(data),
    }),
  },
  effects: dispatch => ({
    async asyncLoadMovieData(): Promise<void> {
      const res = await getMovieList()
      const json = await res.json()
      dispatch.movies.loadMovieData(json.subjects)
    },
  }),
})
