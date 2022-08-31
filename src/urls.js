import { API_KEY } from "./Constants/constants";

const urls = {
  originals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  trending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  thriller: `discover/movie?api_key=${API_KEY}&with_genres=53`,
  comedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  mystery: `discover/movie?api_key=${API_KEY}&with_genres=9648`,
  anime: `discover/movie?api_key=${API_KEY}&with_genres=16`,
};

export default urls;
