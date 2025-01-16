// export const getPopularMovies = async () => {
//   const response = await fetch(
//     `${BASE_URL}/movie/popular?api_key=${SECRET_KEY}`
//   );
//   const data = await response.json();
//   return data.results;
// };

// export const searchMovies = async (query) => {
//   const response = await fetch(
//     `${BASE_URL}/search/movie?api_key=${SECRET_KEY}&query=${encodeURIComponent(
//       query
//     )}`
//   );
// };

import axios from "axios";

export const getPopularMovies = async () => {
  try {
    const SECRET_KEY = import.meta.env.VITE_REACT_SECRET_KEY;
    const BASE_URL = import.meta.env.VITE_REACT_BASE_URL; // Corrected line

    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: SECRET_KEY },
    });
    return response.data.results; // Axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const SECRET_KEY = import.meta.env.VITE_REACT_SECRET_KEY;

    const BASE_URL = import.meta.env.VITE_REACT_BASE_URL; // Corrected line
    console.log(BASE_URL);
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: SECRET_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching for movies:", error);
    throw error;
  }
};
