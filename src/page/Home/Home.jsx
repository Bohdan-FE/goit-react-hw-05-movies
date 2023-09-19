import { getMovies } from 'API/api';
import MovieItem from 'components/MovieItem/MovieItem';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieList, Title } from './Home.styled';

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getData() {
      try {
        const movies = await getMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Title>Trending movies</Title>
      <MovieList>
        {movies.map(movie => (
          <MovieItem
            movie={movie}
            state={{ from: location.pathname }}
            key={movie.id}
          />
        ))}
      </MovieList>
    </>
  );
}

export default Home;
