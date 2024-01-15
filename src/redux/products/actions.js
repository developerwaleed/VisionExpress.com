// actions.js
import axios from 'axios';

export const GET_PRODUCTS = 'VisionExpress.com/products/GET_PRODUCTS';
export const SELECTED_PRODUCTS = 'VisionExpress.com/products/SELECTED_PRODUCTS';
export const REMOVE_SELECTED_PRODUCTS = 'VisionExpress.com/products/REMOVE_SELECTED_PRODUCTS';
export const FILTER = 'VisionExpress.com/products/FILTER';

export const getItems = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const SelectedItems = (product) => ({
  type: SELECTED_PRODUCTS,
  payload: product,
});

export const removeSelectedItems = () => ({
  type: REMOVE_SELECTED_PRODUCTS,
});

export const itemFilter = (search) => ({ type: FILTER, payload: search });

export const fetchItems = () => async (dispatch) => {
  const response = await axios.get('https://fakestoreapi.com/products');
  dispatch(getItems(response.data));
};

export const fetchItemDetail = (id) => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  dispatch(SelectedItems(response.data));
};
