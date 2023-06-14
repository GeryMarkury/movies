const URLS = {
  TRENDING: 'https://api.themoviedb.org/3/trending/movie/day',
  SEARCH_MOVIE: 'https://api.themoviedb.org/3/search/movie',
  MOVIE_DETAILS: 'https://api.themoviedb.org/3/movie/',
};

const OPTIONS = {
  method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTEwMzFmNzM4YjFlZTNlZmFlY2I5OTE4NzA5Njg4NSIsInN1YiI6IjY0ODk5NzRhZDJiMjA5MDBjYTIyMDE3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9gZmXimMFGNWQXFisDTG4ywfRuOX6Zk8W6SpiteXFXo',
  },
};

export const fetchTrendingMovies = () => {
  return fetch(`${URLS.TRENDING}`, OPTIONS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    //     console.log(response);
    return response.json();
  });
};

export const fetchMovieBySearchQuery = search => {
  return fetch(`${URLS.SEARCH_MOVIE}?query=${search}`, OPTIONS).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      //     console.log(response);
      return response.json();
    }
  );
};

export const fetchMovieById = id => {
  return fetch(`${URLS.MOVIE_DETAILS}${id}`, OPTIONS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    // console.log(response);
    return response.json();
  });
};

export const fetchCastOfMovie = id => {
  return fetch(`${URLS.MOVIE_DETAILS}${id}/credits`, OPTIONS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    // console.log(response);
    return response.json();
  });
};

export const fetchReviewsOfMovie = id => {
  return fetch(`${URLS.MOVIE_DETAILS}${id}/reviews`, OPTIONS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    // console.log(response);
    return response.json();
  });
};