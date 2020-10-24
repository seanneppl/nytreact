import axios from 'axios';
import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_LOADING } from './types';
// import { tokenConfig } from './authActions';
// import { returnErrors } from './errorActions';
import { IArticle } from '../../types/interfaces';

// const route = process.env.NODE_ENV === "development" ? "http://localhost:5000/" : "/";

export const getArticles = () => (dispatch: Function) => {
  dispatch(setArticlesLoading());
  axios
    .get('/api/articles')
    .then(res =>
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      })
    )
  // .catch(err =>
  //   dispatch(returnErrors(err.response.data, err.response.status))
  // );
};

export const addArticle = (article: IArticle) => (
  dispatch: Function,
  getState: Function
) => {
  axios
    .post('/articles', article)
    .then(res =>
      dispatch({
        type: ADD_ARTICLE,
        payload: res.data
      })
    )
  // .catch(err =>
  //   dispatch(returnErrors(err.response.data, err.response.status))
  // );
};

export const deleteArticle = (id: string) => (
  dispatch: Function,
) => {
  console.log("fired");
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
