import { searchMovies } from 'API/api';
import { MovieList } from 'pages/Movies/Home/Home.styled';
import MovieItem from 'components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Form } from './Movies.styled';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (searchParams.get('query')) {
      async function getMovies() {
        try {
          const movies = await searchMovies(searchParams.get('query'));
          setMovies(movies.results);
        } catch (err) {
          console.log(err);
        }
      }
      getMovies();
    }
    return;
  }, [searchParams]);

  return (
    <>
      <Form
        action="submit"
        onSubmit={e => {
          e.preventDefault();
          setSearchParams({ query });
        }}
      >
        <input
          type="text"
          name="query"
          placeholder="search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </Form>
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
