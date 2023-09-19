import { getMovieById } from 'API/api';
import { Suspense, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  GoBackStyled,
  LinkStyled,
  MovieDetailsStyled,
} from './MovieDetails.styled';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
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

  if (!movie) {
    return;
  }

  return (
    <>
      <Link to={ref.current.state?.from ?? '/'}>
        <GoBackStyled>&#171;--Go back</GoBackStyled>
      </Link>
      <MovieDetailsStyled>
        <img
          src={
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : 'https://image.tmdb.org/t/p/w500/tPkgBEpq1Rx7wcTFEjZFRhbTLrd.jpg'
          }
          alt={movie.title}
          loading="lazy"
          // onError={e => {
          //   e.target.src =
          //     'https://image.tmdb.org/t/p/w500/tPkgBEpq1Rx7wcTFEjZFRhbTLrd.jpg';
          // }}
        />
        <div>
          <p className="title">{movie.title}</p>
          <p className="release">{movie.release_date}</p>
          <p className="vote">Rating: {movie.vote_average}</p>
          <p className="overview">{movie.overview}</p>
        </div>
      </MovieDetailsStyled>
      <LinkStyled to={`/movies/${movieId}/cast`}>Cast</LinkStyled>
      <LinkStyled to={`/movies/${movieId}/reviews`}>Reviews</LinkStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
