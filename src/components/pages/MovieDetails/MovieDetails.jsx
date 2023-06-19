import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from "Api";
import defaultPoster from '../../../images/defaultMoviePoster.jpg';
import { MovieContainer, Image } from "./MovieDetail.styled";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  
  const BASE_URL = 'https://image.tmdb.org/t/p/';
  const IMG_SIZE = 'w400';

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
    
  return (<>
    <MovieContainer><div><Image src={movie.poster_path ? `${BASE_URL}${IMG_SIZE}${movie.poster_path}` : defaultPoster} alt={movie.title} /></div>
    <div><h2>{movie.title}</h2>
    <p>User score: {movie.vote_average}</p>
    <h3>Overview</h3>
    <p>{movie.overview}</p>
    <h4>Genres</h4>
    <p>{genres}</p></div></MovieContainer>
    <p>Additional information</p>
    <ul>
      <li><Link to="cast">Cast</Link></li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
    <Outlet />
  </>)
};