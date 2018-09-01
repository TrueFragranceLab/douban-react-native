const apikey: string = '0b2bdeda43b5688921839c8ecb20399b'
const host: string = 'https://api.douban.com/v2'

export enum MovieTypeEnum {
  HOT = 'in_theaters',
  TOP = 'top250',
  NEW = 'coming_soon',
}

export function getMovieList(type: MovieTypeEnum = MovieTypeEnum.HOT) {
  return fetch(`${host}/movie/${type}?apikey=${apikey}`)
}

export function movieSubject(id: string) {
  return fetch(`${host}/movie/subject/${id}?apikey=${apikey}`)
}

export function movieComments(id: string) {
  return fetch(`${host}/movie/subject/${id}/comments?apikey=${apikey}`)
}

export function movieSearchText(text: string) {
  return fetch(`${host}/movie/search?q=${text}?apikey=${apikey}`)
}

export function moviesSearchTag(text: string) {
  return fetch(`${host}/movie/search?tag=${text}?apikey=${apikey}`)
}
