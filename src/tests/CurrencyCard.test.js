import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CurrencyCard from 'components/CurrencyCard';
import { Provider } from 'react-redux';
import store from 'redux/store';
import BaseCurrencyContext from 'context/BaseCurrencyContext';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Tests for <Conversion /> component', () => {
  const currency = (
    <CurrencyCard
      currency="EUR"
      rate={100.023232}
      isDark={false}
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
    render(wrap(currency));
    expect(screen.getByText('EUR')).not.toBeNull();
    expect(screen.getByText('100.0232')).not.toBeNull();
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrap(currency)).toJSON()).toMatchSnapshot();
  });
});
