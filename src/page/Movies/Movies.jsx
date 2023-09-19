import { searchMovies } from 'API/api';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Form from 'components/Form/Form';
import MovieList from 'components/MoveList/MovieList';
import PaginationComponent from 'components/Pagination/PaginationComponent';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || '1');
  const location = useLocation();
  const query = searchParams.get('query');
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMovies() {
      try {
        const movies = await searchMovies(query, page);
        setMovies(movies.results);
        setTotalPages(movies.total_pages);
        setSearchParams({
          query,
          page,
        });
      } catch (err) {
        console.log(err);
      }
    }
    getMovies();
    if (totalPages < page) {
      setPage(1);
    }
  }, [query, page, setSearchParams, totalPages]);

  const handleChangePage = page => {
    setPage(page);
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
