import axios from 'axios';

const API_KEY = 'af181d8638fc4af5618fbe58b42ee124';
const BASE_URL = 'https://api.themoviedb.org/3';

if (!API_KEY) {
  console.error(
    'API key is missing! Please set REACT_APP_THEMOVIEDB_API_KEY in your .env.local file.'
  );
}

axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        query,
        page,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error searching movies for "${query}":`, error);
    throw error;
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie details for ID ${movieId}:`, error);
    throw error;
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`);
    console.log(response.data.cast);
    return response.data.cast;
  } catch (error) {
    console.error(`Error fetching movie credits for ID ${movieId}:`, error);
    throw error;
  }
};

export const getMovieReviews = async (movieId, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        page,
      },
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching movie reviews for ID ${movieId}:`, error);
    throw error;
  }
};
