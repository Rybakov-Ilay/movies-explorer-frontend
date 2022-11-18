export default function getFilteredMovies(searchParameter, moviesList) {
  const moviesListFiltredByMovie = moviesList.filter(
    movie => movie
      .nameRU
      .toLowerCase()
      .includes(searchParameter.movie.toLowerCase()
      )
  )
  return searchParameter.filterDuration === 'on'
    ? moviesListFiltredByMovie.filter(movie => movie.duration <= 40)
    : moviesListFiltredByMovie
}
