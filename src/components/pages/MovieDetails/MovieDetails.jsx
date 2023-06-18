import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from "Api";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const genres = movie.genres ? movie.genres.map(genre => genre.name).join(", ") : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovieById(movieId);
        setMovie(response);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [movie, movieId]);
    
  return (<div>
    <h2>{movie.title}</h2>
    <p>User score: {movie.popularity}</p>
    <h3>Overview</h3>
    <p>{movie.overview}</p>
    <h4>Genres</h4>
    {genres}
    <p>Additional information</p>
    <ul>
      <li><Link to="cast">Cast</Link></li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
    <Outlet />
  </div>)
};