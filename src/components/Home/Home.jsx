import { getMovies } from 'API/api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      const movies = await getData();
      setMovies(movies);
    }
    getMovies();
  }, []);

  async function getData() {
    try {
      const movies = await getMovies();
      return movies.results;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <p className="text-xl pt-4 pl-4">Trending movies</p>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className="text-blue-600 text-lg">
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location.pathname }}
            >
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
