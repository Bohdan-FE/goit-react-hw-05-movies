import { getMovieCredits } from 'API/api';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { ActorList } from './Cast.styled';

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
      <ActorList>
        {cast
          .filter(actor => actor.profile_path !== null)
          .map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path
                    : 'https://image.tmdb.org/t/p/w500/tPkgBEpq1Rx7wcTFEjZFRhbTLrd.jpg'
                }
                alt="actor.name"
              />
              <p>{actor.name}</p>
            </li>
          ))}
      </ActorList>
      <Outlet />
    </>
  );
}

export default Cast;
