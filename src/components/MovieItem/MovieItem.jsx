import { Link } from 'react-router-dom';

function MovieItem({ movie, state }) {
  const { id, poster_path, title, vote_average } = movie;

  return (
    <li>
      <Link to={`/movies/${id}`} state={state}>
        <img
          src={
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : 'https://image.tmdb.org/t/p/w500/tPkgBEpq1Rx7wcTFEjZFRhbTLrd.jpg'
          }
          alt={title}
          loading="lazy"
          // onError={e => {
          //   e.target.src =
          //     'https://image.tmdb.org/t/p/w500/tPkgBEpq1Rx7wcTFEjZFRhbTLrd.jpg';
          // }}
        />
        <p>{title}</p>
        <p>{vote_average}</p>
      </Link>
    </li>
  );
}

export default MovieItem;
