import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import articlesReducer from './articlesReducer';


export default combineReducers({
  articles: articlesReducer,
  items: itemsReducer,
});
