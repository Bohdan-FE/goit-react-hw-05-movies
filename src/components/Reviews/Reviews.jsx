import { getMovieReviews } from 'API/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews.results);
      } catch (err) {
        console.log(err);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There isn't any reviews</p>
      )}
    </>
  );
}

export default Reviews;
