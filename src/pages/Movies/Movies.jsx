import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieBySearchQuery } from "Api";
import { MovieList } from "components/MovieList/MovieList";
import { SearchBox } from "components/SearchBox/SearchBox";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovieBySearchQuery(movieName);
          setMovies(response.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [movieName]);

    const visibleMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieName.toLowerCase())
    );
    
    const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
    };
    
    return (
    <main>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <MovieList movies={visibleMovies} />
    </main>
  );

};
 
export default Movies;