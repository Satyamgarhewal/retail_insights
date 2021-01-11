import { typeConstants } from '../utils/typeConstants';
const {
  FETCH_CAROUSEL_DATA,
  FETCH_MOVIE_DATA,
  FETCH_SEARCH_DATA,
  DELETE_SEARCH_DATA,
  DELETE_MOVIE_DATA,
} = typeConstants;
const Carousel = {
  carouselData: [],
  movieData: [],
  searchData: [],
};
const homepageReducer = (state = Carousel, action) => {
  switch (action.type) {
    case FETCH_CAROUSEL_DATA: {
      return {
        ...state,
        carouselData: [...state.carouselData, action.payload],
      };
    }
    case FETCH_MOVIE_DATA: {
      return {
        ...state,
        movieData: [...state.movieData, action.payload],
      };
    }
    case FETCH_SEARCH_DATA: {
      return {
        ...state,
        searchData: [...state.searchData, action.payload],
      };
    }
    case DELETE_SEARCH_DATA: {
      return {
        ...state,
        searchData: [],
      };
    }
    case DELETE_MOVIE_DATA: {
      return { ...state, movieData: [] };
    }
    default: {
      return { ...state };
    }
  }
};

export default homepageReducer;
