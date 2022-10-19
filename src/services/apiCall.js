const URL_BASE = 'https://api.unsplash.com/';
const API_KEY = 'f3_j5xaaagLteInPGf7sUqRFgJc8ulftP1UGe1ulBi0';
const URL_SEARCH = 'search/photos/?client_id=';
const URL_RANDOM = 'photos/random/';


export const searchResults = async (value, url) => {

    if (value != '')  {
      const response = await fetch(url);
      const data = await response.json();
      setResult(data);
    } else {
      const response = await fetch(URL) ;
      const data = await response.json();
      setResult(data.results);
    }
  };