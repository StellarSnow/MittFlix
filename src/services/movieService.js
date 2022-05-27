const baseURL = 'https://api.themoviedb.org/3/discover/tv?';
const apiKey = 'db250fbe8771bb7fbd7907d266a5c282';

export const getMovies = async () => {
  return Promise.all([getMoviesFromProvider(8), getMoviesFromProvider(230), getMoviesFromProvider(337), getMoviesFromProvider(350)])
    .then((results) => {
      const movies = [];

      results.map(result => movies.push(result.results));
      
      return movies;
    });
}

const getMoviesFromProvider = async (provider) => {
  const URL = baseURL + 'api_key=' + apiKey + `&language=en-US&sort_by=popularity.desc&with_watch_providers=${provider}&watch_region=CA`
  const response = await fetch(URL)
  const results = await response.json();

  return results;
}

export const getSpecificMovie = async (id) => {
  const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`
  const response = await fetch(URL)
  const results = await response.json();
  
  return results;
}
