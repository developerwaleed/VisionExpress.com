import axios from 'axios';

const GET_PRODUCTS = 'VisionExpress.com/products/GET_PRODUCTS';
const SELECTED_PRODUCTS = 'VisionExpress.com/products/SELECTED_PRODUCTS';
const REMOVE_SELECTED_PRODUCTS = 'VisionExpress.com/products/REMOVE_SELECTED_PRODUCTS';
const FILTER = 'VisionExpress.com/products/FILTER';

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

const intialState = {
  products: [],
};

export const fetchItems = () => async (dispatch) => {
  const response = await axios
    .get('https://fakestoreapi.com/products');
  dispatch(getItems(response.data));
};

export const fetchItemDetail = (id) => async (dispatch) => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`);
  dispatch(SelectedItems(response.data));
};

export const itemFilter = (search) => ({ type: FILTER, payload: search });

export const itemsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case FILTER: {
      const result = state.products.filter((product) => {
        const title = product.title.toLowerCase();
        return title.includes(action.payload.toLowerCase());
      });
      return { products: result };
    }
    default:
      return state;
  }
};

export const selectedItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_PRODUCTS:
      return { ...state, ...action.payload };
    case REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
