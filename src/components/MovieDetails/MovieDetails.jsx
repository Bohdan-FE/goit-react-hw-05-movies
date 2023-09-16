import { getMovieById } from 'API/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [title, setTitle] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      const data = await getData();
      setTitle(data);
    }
    fetch();
  }, []);

  async function getData() {
    try {
      const movie = await getMovieById(movieId);
      return movie.title;
    } catch (error) {
      console.log(error);
    }
  }

  return <p>{title}</p>;
}

export default MovieDetails;
