import { getMovies } from 'API/api';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Title } from './Home.styled';
import MovieList from 'components/MoveList/MovieList';
import PaginationComponent from 'components/Pagination/PaginationComponent';

function Home() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const location = useLocation();

  useEffect(() => {
    async function getData() {
      try {
        const movies = await getMovies(page);
        setMovies(movies.results);
        setTotalPages(movies.total_pages);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [page, setSearchParams]);

  const handleChangePage = page => {
    setSearchParams({ page });
  };

  return (
    <>
      <Title>Trending movies</Title>
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

export default Home;
