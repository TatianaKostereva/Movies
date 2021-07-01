import axios from 'axios';

const API_KEY = 'd5b2f376';

const searchMovies = (str: string) => {
  return axios({
    url: `http://www.omdbapi.com/?apikey=${API_KEY}&s="${str}" `,
  })
}

export default searchMovies;