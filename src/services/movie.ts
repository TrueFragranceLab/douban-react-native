const apikey: string = '0b2bdeda43b5688921839c8ecb20399b'
const host: string = 'https://api.douban.com/v2'

export function getMovieList(type: string) {
  let path = 'in_theaters'
  switch (type) {
    case 'hot':
      path = 'in_theaters'
      break
    case 'top':
      path = 'top250'
      break
    case 'new':
      path = 'coming_soon'
      break
    default:
      break
  }
  return fetch(`${host}/movie/${path}?apikey=${apikey}`)
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
