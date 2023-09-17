import { getMovieById } from 'API/api';
import { Suspense, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const ref = useRef(location);

  useEffect(() => {
    async function getMovie() {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <Link to={ref.current.state?.from ?? '/'}>Go back</Link>
      <p>{movie.title}</p>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
