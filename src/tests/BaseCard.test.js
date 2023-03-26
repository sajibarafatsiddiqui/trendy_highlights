import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from 'redux/store';
import BaseCurrencyContext from 'context/BaseCurrencyContext';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseCard from 'components/BaseCard';

describe('Tests for <BaseCard /> component', () => {
  const base = (
    <BaseCard
      baseCurrency="USD"
    />
  );
  const baseCurrency = 'USD';

  const wrap = (component) => (
    <Provider store={store}>
      <BaseCurrencyContext.Provider value={{ baseCurrency }}>
        <Router>
          {component}
        </Router>
      </BaseCurrencyContext.Provider>
    </Provider>
  );
  it('Should render the content correctly', () => {
    render(wrap(base));
    expect(screen.getByText('USD')).not.toBeNull();
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrap(base)).toJSON()).toMatchSnapshot();
  });
});
