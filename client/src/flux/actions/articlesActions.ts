import axios from 'axios';
import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_LOADING } from './types';
import { ISearchArticle } from '../../types/interfaces';

export const getArticles = () => (dispatch: Function) => {
  dispatch(setArticlesLoading());
  axios
    .get('/api/articles')
    .then(res =>
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      })
    ).catch((err: any) => console.log(err));
};

export const addArticle = (article: ISearchArticle) => (
  dispatch: Function,
) => {
  axios
    .post('/api/articles', article)
    .then(res =>
      dispatch({
        type: ADD_ARTICLE,
        payload: res.data
      })
    ).catch((err: any) => console.log(err));
};

export const deleteArticle = (id: string) => (
  dispatch: Function,
) => {
  axios
    .delete(`/api/articles/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ARTICLE,
        payload: id
      })
    ).catch((err: any) => console.log(err));
};

export const setArticlesLoading = () => {
  return {
    type: ARTICLES_LOADING
  };
};
