import { generateCarouselUrl, getSearchByTitle } from '../utils/urlGenerator';
import { typeConstants } from '../utils/typeConstants';
const keys = ['tt1375666', 'tt0113497', 'tt0800369'];

const {
  FETCH_CAROUSEL_DATA,
  FETCH_MOVIE_DATA,
  FETCH_SEARCH_DATA,
  DELETE_SEARCH_DATA,
  DELETE_MOVIE_DATA,
} = typeConstants;
export const getMoviesForCarousel = () => {
  const data = [];
  return async (dispatch) => {
    try {
      const url1 = generateCarouselUrl(keys[0]);
      const url2 = generateCarouselUrl(keys[1]);
      const url3 = generateCarouselUrl(keys[2]);
      const urls = [url1, url2, url3];
      let requests = urls.map((url) => fetch(url));
      Promise.all(requests).then((responses) => {
        for (let response of responses) {
          data.push(response.json());
        }
      });

      dispatch({
        type: FETCH_CAROUSEL_DATA,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovieData = (key) => {
  return async (dispatch) => {
    const url = generateCarouselUrl(key);
    try {
      const data = await fetch(url)
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          console.log(err);
        });
      dispatch({
        type: FETCH_MOVIE_DATA,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getSearchData = (value) => {
  return async (dispatch) => {
    const url = getSearchByTitle(value);
    try {
      const data = await fetch(url)
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          console.log(err);
        });
      dispatch({
        type: FETCH_SEARCH_DATA,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteSearchData = () => {
  return (dispatch) => {
    dispatch({
      type: DELETE_SEARCH_DATA,
    });
  };
};

export const deleteMovieData = () => {
  return (dispatch) => {
    dispatch({
      type: DELETE_MOVIE_DATA,
    });
  };
};
