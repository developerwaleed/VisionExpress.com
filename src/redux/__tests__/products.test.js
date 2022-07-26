import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import store from '../configureStore';

const mockAPIdata = [{
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
},
{
  id: 2,
  title: 'Mens Casual Premium Slim Fit T-Shirts',
  price: 22.3,
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
},
{
  id: 1,
  title: 'Mens Cotten Jacket',
  price: 55.99,
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
},
];

const intialState = {
  products: [],
};

const mockProductData = () => ({ type: 'VisionExpress.com/products/GET_PRODUCTS', payload: mockAPIdata });

describe('Redux store tests:', () => {
  it('Reducer returns initial state', () => {
    expect(store.getState().allProducts).toEqual(intialState);
  });

  it('Fetchproducts action dispatched correctly', () => {
    act(() => {
      store.dispatch(mockProductData());
    });
    expect(store.getState().allProducts.products).toEqual(mockAPIdata);
  });
});
