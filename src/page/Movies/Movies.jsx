import { searchMovies } from 'API/api';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Form from 'components/Form/Form';
import MovieList from 'components/MoveList/MovieList';
import PaginationComponent from 'components/Pagination/PaginationComponent';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');
  const page = searchParams.get('page') ?? '1';

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMovies() {
      try {
        const movies = await searchMovies(query, page);
        setMovies(movies.results);
        setTotalPages(movies.total_pages);
      } catch (err) {
        console.log(err);
      }
    }
    getMovies();
  }, [query, page, setSearchParams]);

  const handleChangePage = page => {
    setSearchParams({ query, page });
  };

  return (
    <>
      <Form />
      <MovieList
        state={{ from: location.pathname + location.search }}
        movies={movies}
      />
      {totalPages > 1 && (
        <PaginationComponent
          page={page}
          onChange={handleChangePage}
          totalPages={totalPages}
        />
      )}
    </>
  );
}

export default Movies;
