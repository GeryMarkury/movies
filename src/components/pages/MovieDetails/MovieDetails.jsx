import { useParams, Link, Outlet } from "react-router-dom";

export const MovieDetails = () => {
const { movieId } = useParams();
  return <div>
    <h1>Now showing movie with id - {movieId}</h1>
    <p>Additional information</p>
    <ul>
      <li><Link to="cast">Cast</Link></li>
      <li>
          <Link to="reviews">Reviews</Link>
        </li>
    </ul>
     <Outlet />
  </div>;
};