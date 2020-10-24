import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
// import { tokenConfig } from './authActions';
// import { returnErrors } from './errorActions';
import { IItem } from '../../types/interfaces';

const route = process.env.NODE_ENV === "development" ? "http://localhost:5000/" : "/";

export const getItems = () => (dispatch: Function) => {
  dispatch(setItemsLoading());
  axios
    .get(route + 'items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
  // .catch(err =>
  //   dispatch(returnErrors(err.response.data, err.response.status))
  // );
};

export const addItem = (item: IItem) => (
  dispatch: Function,
  getState: Function
) => {
  axios
    .post(route + 'items', item)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
  // .catch(err =>
  //   dispatch(returnErrors(err.response.data, err.response.status))
  // );
};

export const deleteItem = (id: string) => (
  dispatch: Function,
  getState: Function
) => {
  axios
    .delete(`${route}items/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
  // .catch(err =>
  //   dispatch(returnErrors(err.response.data, err.response.status))
  // );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
