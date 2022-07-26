import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Listitems from '../app/components/Listitems/Listitems.js';
import store from '../redux/configureStore';

it('renders properly', () => {
  const tree = renderer.create(
    <Router>
      <Provider store={store}>
        <Listitems />
      </Provider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
