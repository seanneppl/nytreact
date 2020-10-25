import axios from 'axios';
import { SEARCH_ARTICLES, SEARCH_LOADING, SEARCH_CLEAR } from './types';
import { ISearch } from '../../types/interfaces';

export const searchArticles = (search: ISearch) => (dispatch: Function) => {
  dispatch(setSearchLoading());

  const start = search.startYear ? `&begin_date=${search.startYear}0101` : '';
  const end = search.endYear ? `&end_date=${search.endYear}0101` : '';
  const query = `${search.term}${start}${end}`

  axios
    .get('/api/search/' + query)
    .then(res =>
      dispatch({
        type: SEARCH_ARTICLES,
        payload: {
          articles: res.data,
          term: query
        }
      })
    ).catch((err: any) => console.log(err))
};

export const setSearchLoading = () => {
  return {
    type: SEARCH_LOADING
  };
};

export const clearSearch = () => (dispatch: Function) => {
  dispatch({
    type: SEARCH_CLEAR,
  })
};
