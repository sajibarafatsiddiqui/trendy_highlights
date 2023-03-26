import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from 'redux/store';
import BaseCurrencyContext from 'context/BaseCurrencyContext';
import { BrowserRouter as Router } from 'react-router-dom';
import CardDetails from 'components/CardDetails';

describe('Tests for <CardDetails /> component', () => {
  const cardDetails = (
    <CardDetails
      startDate="2023-02-01"
      historyRate={100.23}
      today="2023-03-17"
      liveRate={100.50}
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
    render(wrap(cardDetails));
    expect(screen.getByText('2023-02-01')).not.toBeNull();
    expect(screen.getByText('100.5')).not.toBeNull();
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrap(cardDetails)).toJSON()).toMatchSnapshot();
  });
});
