const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const getMovies = async (name, type) => {
  const response = await fetch(`${API_URL}&s=${name}${type !== 'all' ? `&type=${type}` : ''}`);
  return await response.json();
};

export default getMovies;
