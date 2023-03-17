import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import Home from 'routes/Home';
import { Provider } from 'react-redux';
import BaseCurrencyContext from 'context/BaseCurrencyContext';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'redux/store';


jest.mock('axios');
axios.get.mockResolvedValue({
    data: {
    response: {
        base: "USD",
        date: "2023-03-17T11:55:16Z",
        rates:{
        ADA: 2.91801541,
        AED: 3.6725,
        EUR: 87.69844742,
        ALL: 107.8995027,
        }
        },
}
});

const baseCurrency ='USD'

const wrap = (component) => (
    <Provider store={store}>
      <BaseCurrencyContext.Provider value={{ baseCurrency }}>
      <Router>
      {component}
      </Router>
      </BaseCurrencyContext.Provider>
    </Provider>
);

describe('Tests for <Home /> component', () => {
  render(wrap(<Home />));
  it('Should render childs from API correctly', () => {
    expect(screen.getByText('AED')).not.toBeNull();
  });

  it('Should display currencies as links', () => {
    render(wrap(<Home />));
    expect(screen.getByText('AED').closest('a').href.includes('AED')).toBeTruthy();
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrap(<Home />)).toJSON()).toMatchSnapshot();
  });
});