import { GET_PRODUCTS, FILTER, SELECTED_PRODUCTS, REMOVE_SELECTED_PRODUCTS } from './actions';

const intialState = {
  products: [],
  noItemsFound: false,
};

export const itemsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload, noItemsFound: false };
    case FILTER: {
      const result = state.products.filter((product) => {
        const title = product.title.toLowerCase();
        return title.includes(action.payload.toLowerCase());
      });
      return { products: result, noItemsFound: result.length === 0 };
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
