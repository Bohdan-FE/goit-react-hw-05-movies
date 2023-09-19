import { getMovies } from 'API/api';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Title } from './Home.styled';
import MovieList from 'components/MoveList/MovieList';
import PaginationComponent from 'components/Pagination/PaginationComponent';

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getData() {
      try {
        const movies = await getMovies(page);
        setMovies(movies.results);
        setTotalPages(movies.total_pages);
        setSearchParams({ page });
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [page, setSearchParams]);

  const handleChangePage = page => {
    setPage(page);
  };

  return (
    <>
      <Title>Trending movies</Title>
      <MovieList state={{ from: location.pathname }} movies={movies} />
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

export default Home;
