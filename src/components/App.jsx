import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('../components/pages/Home/Home'));
const Movies = lazy(() => import('../components/pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../components/pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<SharedLayout />}>
         <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </div>
  );
};
