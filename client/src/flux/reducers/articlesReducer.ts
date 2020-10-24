import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_LOADING } from '../actions/types';

import { IArticle, IAction } from '../../types/interfaces';

const initialState = {
  articles: [],
  loading: false
};

interface IState {
  articles: IArticle[];
}

export default function (state: IState = initialState, action: IAction) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(article => article._id !== action.payload)
      };
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [action.payload, ...state.articles]
      };
    case ARTICLES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
