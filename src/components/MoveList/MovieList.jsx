import MovieItem from 'components/MovieItem/MovieItem';
import { MovieListStyled } from './MovieList.styled';

function MovieList({ movies, state }) {
  console.log(movies);
  return (
    <MovieListStyled>
      {movies
        .filter(movie => movie.poster_path !== null)
        .map(movie => (
          <MovieItem key={movie.id} movie={movie} state={state} />
        ))}
    </MovieListStyled>
  );
}

export default MovieList;
