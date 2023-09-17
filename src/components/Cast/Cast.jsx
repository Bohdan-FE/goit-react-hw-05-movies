import { getMovieCredits } from 'API/api';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCust() {
      try {
        const cast = await getMovieCredits(movieId);
        setCast(cast.cast);
      } catch (err) {
        console.log(err);
      }
    }
    getCust();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.original_name}</li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default Cast;
