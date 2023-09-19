import { searchMovies } from 'API/api';
import { MovieList } from 'page/Home/Home.styled';
import MovieItem from 'components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Form from 'components/Form/Form';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMovies() {
      try {
        const movies = await searchMovies(query);
        setMovies(movies.results);
      } catch (err) {
        console.log(err);
      }
    }
    getMovies();
  }, [query]);

  return (
    <>
      <Form />
      <MovieList>
        {movies.map(movie => (
          <MovieItem
            key={movie.id}
            movie={movie}
            state={{ from: location.pathname + location.search }}
          />
        ))}
      </MovieList>
    </>
  );
}

export default Movies;
