import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ItemCard from '../app/components/ItemCard/ItemCard';
import store from '../redux/configureStore';

it('renders properly', () => {
  const tree = renderer
    .create(
      <Router>
        <Provider store={store}>
          <ItemCard />
        </Provider>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
