import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userDetails from '../reducers/userDetailsReducer';
import homepageReducer from '../reducers/homepageReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      userDetails: userDetails,
      movieData: homepageReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
