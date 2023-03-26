import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import Details from 'routes/Details';
import { Provider } from 'react-redux';
import BaseCurrencyContext from 'context/BaseCurrencyContext';
import {
  MemoryRouter, Route, Routes,
} from 'react-router-dom';
import store from 'redux/store';

jest.mock('axios');
axios.get.mockResolvedValue({
  data: {
    response: {
      rates: {
        AED: 3.6725,
      },
    },
  },
});

const baseCurrency = 'USD';

const wrap = (component) => (
  <Provider store={store}>
    <BaseCurrencyContext.Provider value={{ baseCurrency }}>
      <MemoryRouter initialEntries={['/details/USD-AED']}>
        <Routes>
          <Route path="/details/:currencies" element={component} />
        </Routes>
      </MemoryRouter>
    </BaseCurrencyContext.Provider>
  </Provider>
);

describe('Tests for <Details /> component', () => {
  render(wrap(<Details />));
  it('Should render childs from API correctly', () => {
    expect(screen.getByText('AED')).not.toBeNull();
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrap(<Details />)).toJSON()).toMatchSnapshot();
  });
});
