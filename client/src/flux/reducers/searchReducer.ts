import { SEARCH_ARTICLES, SEARCH_LOADING, SEARCH_CLEAR } from '../actions/types';

import { IArticle, IAction } from '../../types/interfaces';

const initialState = {
  term: '',
  articles: [],
  loading: false
};

interface IState {
  articles: IArticle[];
  term: string;
}

export default function (state: IState = initialState, action: IAction) {
  switch (action.type) {
    case SEARCH_ARTICLES:
      return {
        ...state,
        term: action.payload.term,
        articles: action.payload.articles,
        loading: false
      };
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_CLEAR:
      return {
        ...state,
        articles: [],
        term: '',
        loading: false
      };
    default:
      return state;
  }
}
