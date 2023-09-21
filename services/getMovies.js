import apiClient from '@/api';

export const getMovieNowPlayingService = async (page) => {
  const res = await apiClient.get(`/movie/now_playing?page=${page}`);
  return res.data;
};

export const getMoviePopularService = async (page) => {
  const res = await apiClient.get(`/movie/popular?page=${page}`);
  return res.data;
};

export const getMovieTopRatedService = async (page) => {
  const res = await apiClient.get(`/movie/top_rated?page=${page}`);
  return res.data;
};

export const getMovieUpcomingService = async (page) => {
  const res = await apiClient.get(`/movie/upcoming?page=${page}`);
  return res.data;
};

export const getMovieDetailService = async (id) => {
  const res = await apiClient.get(`/movie/${id}`);
  return res.data;
};

export const getSearchMovieService = async (page, q) => {
  const res = await apiClient.get(`/search/movie?page=${page}&query=${q}`);
  return res.data;
};
