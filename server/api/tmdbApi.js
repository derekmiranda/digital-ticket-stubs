require('dotenv').config();
const fetch = require('node-fetch');

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.TMDB_API_V3_KEY;

async function makeApiRequest(url) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}

function makeQueryStr(data) {
  return Object.keys(data)
    .reduce((keyValPairs, key) => {
      const val = data[key];
      const pair = `${key}=${encodeURIComponent(val)}`;
      return keyValPairs.concat(pair);
    }, [])
    .join('&');
}

const exportObj = {};

exportObj.searchForMovie = async (movie) => {
  const query = {
    api_key: apiKey,
    query: movie,
    include_adult: false,
  }
  const queryStr = makeQueryStr(query);
  const movieSearchUrl = `${apiUrl}/search/movie?${queryStr}`;

  let result;
  try {
    result = await makeApiRequest(movieSearchUrl);
  } catch (err) {
    result = err;
  } finally {
    return result;
  }
}

module.exports = exportObj;
