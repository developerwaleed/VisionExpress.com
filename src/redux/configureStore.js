import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { itemsReducer, selectedItemsReducer } from './products/products';

const rootReducer = combineReducers({
  allProducts: itemsReducer,
  product: selectedItemsReducer,
});

const store = configureStore({ reducer: rootReducer }, {}, applyMiddleware(thunk));

export default store;
