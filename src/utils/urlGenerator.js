const omdbKey = 'e5b628a6';

export const generateCarouselUrl = (key) => {
  return `http://www.omdbapi.com/?i=${key}&apikey=${omdbKey}`;
};

export const getSearchByTitle = (value) => {
  return `http://www.omdbapi.com/?t=${value}&apikey=${omdbKey}`;
};
