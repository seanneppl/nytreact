import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  articles: articlesReducer,
  search: searchReducer,
});
