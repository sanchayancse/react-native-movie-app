import {
  API_KEY,
  NOW_PLAYING_MOVIES_URL,
  UP_COMING_MOVIES_URL,
  POPULAR_MOVIES_URL,
  SEARCH_MOVIE_URL,
  MOVIE_DETAILS,
  IMAGE_BASE_PATH,
} from '@env';

const apikey: string = API_KEY;

export const baseImagePath = (size: string, path: string) => {
  return `${IMAGE_BASE_PATH}/${size}/${path}`;
};

export const nowPlayingMovies: string = `${NOW_PLAYING_MOVIES_URL}?api_key=${apikey}`;

export const upCommingMovies: string = `${UP_COMING_MOVIES_URL}?api_key=${apikey}`;
export const popularMovies: string = `${POPULAR_MOVIES_URL}?api_key=${apikey}`;

export const searchMovies = (keyword: string) => {
  return `${SEARCH_MOVIE_URL}?api_key=${apikey}&query=${keyword}`;
};

export const movieDetails = (id: number) => {
  return `${MOVIE_DETAILS}/${id}?api_key=${apikey}`;
};
export const movieCastDetails = (id: number) => {
  return `${MOVIE_DETAILS}/${id}/credits?api_key=${apikey}`;
};
