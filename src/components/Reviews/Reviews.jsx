import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsOfMovie } from 'Api';

const Reviews = () => { 
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchReviewsOfMovie(movieId);
          setReviews(response.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
    }, [movieId]);

    return (
        <ul>
            {reviews.length === 0 ? (
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              We don't have any reviews for this movie
            </p>
          ) : (
            reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Author: {author}</p>
                      <p>{content}</p>
                </li>
              );
            })
          )}
        </ul>
    )
};

export default Reviews;