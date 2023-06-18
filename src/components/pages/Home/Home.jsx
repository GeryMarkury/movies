import { fetchTrendingMovies } from "Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrendingMovies();
          setMovies(response.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

    return (
        <div>
        <h1>Trending today</h1>
        <ul>
           {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}
          </Link>
               </li>
               ))}
            </ul>
            </div>
    )
};