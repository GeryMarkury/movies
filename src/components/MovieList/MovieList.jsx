import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const MovieList = ({ movies }) => {
const location = useLocation();

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }} >{movie.title}
          </Link>
        </li>
      ))}
    </div>
  );
};