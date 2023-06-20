import { fetchTrendingMovies } from "Api";
import { MovieList } from "components/MovieList/MovieList";
import { useState, useEffect } from "react";


const Home = () => {
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
        <MovieList movies={movies}/>
        </div>
    )
};

export default Home;