import { fetchTrendingMovies } from "Api";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
          <Link to={`/movies/${movie.id}`} state={{ from: location }} >{movie.title}
          </Link>
               </li>
               ))}
            </ul>
            </div>
    )
};

export default Home;