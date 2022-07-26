import '@testing-library/jest-dom';
import store from '../configureStore';

const intialState = {
  products: [],
};

describe('Redux store tests:', () => {
  it('Reducer returns initial state', () => {
    expect(store.getState().allProducts).toEqual(intialState);
  });
});
