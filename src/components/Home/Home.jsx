import { getMovies } from 'API/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const movies = await getMovies();
      setMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <p>Trending movies</p>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
