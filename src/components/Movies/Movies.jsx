import { searchMovies } from 'API/api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

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
      <form
        action="submit"
        onSubmit={e => {
          e.preventDefault();
          setSearchParams({ query });
        }}
      >
        <label htmlFor="query">Find movies</label>
        <input
          type="text"
          name="query"
          id="query"
          placeholder="search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location.pathname + location.search }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Movies;
