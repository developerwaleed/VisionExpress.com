import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ItemDetails from '../app/components/ItemDetails/ItemDetails';
import store from '../redux/configureStore';

it('renders properly', () => {
  const tree = renderer.create(
    <Router>
      <Provider store={store}>
        <ItemDetails />
      </Provider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
