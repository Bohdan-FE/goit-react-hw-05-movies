import MovieItem from 'components/MovieItem/MovieItem';
import { MovieListStyled } from './MovieList.styled';

function MovieList({ movies, state }) {
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} state={state} />
      ))}
    </MovieListStyled>
  );
}

export default MovieList;
