import { Link } from "react-router-dom";

export const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>{movie.title}
          </Link>
        </li>
      ))}
    </div>
  );
};